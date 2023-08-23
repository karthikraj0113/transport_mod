import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import Styled from 'styled-components';
import { ChartjsAreaChart } from '../../../components/charts/chartjs';
import { chartLinearGradient, customTooltips } from '../../../components/utilities/utilities';
import { performanceFilterData, performanceGetData, setIsLoading } from '../../../redux/chartContent/actionCreator';

 
const PerformanceChartWrapper = Styled.div`
    @media only screen and (max-width: 1599px){ 
        background: #fff;
        border-radius: 10px;
    }
    .performance-lineChart{
        margin-top: 20px;
        .chart-label{
            display: none;
        }
        ul{
            margin-top: 16px;
            li{
                &:not(:last-child){
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 25px;
                }
            }
        }
    }
    .chartjs-tooltip{
        min-width: 175px !important;
        @media only screen and (max-width: 767px){
            min-width: 150px !important;
        }
    }
`;
const WebsitePerformance = ({title}) => {
  const dispatch = useDispatch();
  const { performanceState, preIsLoading } = useSelector(state => {
    return {
      performanceState: state.chartContent.performanceData,
      preIsLoading: state.chartContent.perLoading,
    };
  });

  const [state, setState] = useState({
    performance: 'year',
    performanceTab: 'users',
  });

  const { performance, performanceTab } = state;

  useEffect(() => {
    if (performanceGetData) {
      dispatch(performanceGetData());
    }
  }, [dispatch]);

  const handleActiveChangePerformance = value => {
    setState({
      ...state,
      performance: value,
    });
    dispatch(performanceFilterData(value));
  };

  const onPerformanceTab = value => {
    setState({
      ...state,
      performanceTab: value,
    });
    return dispatch(setIsLoading());
  };

  const performanceDatasets = performanceState !== null && [
    {
      data: performanceState[performanceTab][1],
      borderColor: '#5F63F2',
      borderWidth: 4,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('performance'), 300, {
          start: '#5F63F230',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#5F63F2',
      hoverBorderWidth: 5,
    },
    {
      data: performanceState[performanceTab][2],
      borderColor: '#C6D0DC',
      borderWidth: 2,
      fill: false,
      backgroundColor: '#00173750',
      label: 'Previous period',
      borderDash: [3, 3],
      pointRadius: '0',
      hoverRadius: '0',
    },
  ];

  return (
    <PerformanceChartWrapper>
      {performanceState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={performance === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangePerformance('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={performance === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangePerformance('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={performance === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangePerformance('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          } 
          title={title}
          size="large"
        > 
          {preIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <div className="performance-lineChart">
              <ChartjsAreaChart
                id="performance"
                labels={performanceState.labels}
                datasets={performanceDatasets}
                options={{
                  maintainAspectRatio: true,
                  elements: {
                    z: 9999,
                  },
                  legend: {
                    display: false,
                  },
                  hover: {
                    mode: 'index',
                    intersect: false,
                  },
                  tooltips: {
                    mode: 'label',
                    intersect: false,
                    backgroundColor: '#ffffff',
                    position: 'average',
                    enabled: false,
                    custom: customTooltips,
                    callbacks: {
                      title() {
                        return performanceTab;
                      },
                      label(t, d) {
                        const { yLabel, datasetIndex } = t;
                        return `<span class="chart-data">${yLabel}k</span> <span class="data-label">${d.datasets[datasetIndex].label}</span>`;
                      },
                    },
                  },
                  scales: {
                    yAxes: [
                      {
                        gridLines: {
                          color: '#e5e9f2',
                          borderDash: [3, 3],
                          zeroLineColor: '#e5e9f2',
                          zeroLineWidth: 1,
                          zeroLineBorderDash: [3, 3],
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 13,
                          fontColor: '#182b49',
                          max: 80,
                          stepSize: 20,
                          callback(label) {
                            return `${label}k`;
                          },
                        },
                      },
                    ],
                    xAxes: [
                      {
                        gridLines: {
                          display: true,
                          zeroLineWidth: 2,
                          zeroLineColor: 'transparent',
                          color: 'transparent',
                          z: 1,
                          tickMarkLength: 0,
                        },
                        ticks: {
                          padding: 10,
                        },
                      },
                    ],
                  },
                }}
                height={window.innerWidth <= 575 ? 200 : 86}
              />
              <ul>
                {performanceDatasets &&
                  performanceDatasets.map((item, index) => {
                    return (
                      <li key={index + 1} className="custom-label">
                        <span
                          style={{
                            backgroundColor: item.borderColor,
                          }}
                        />
                        {item.label}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </Cards>
      )}
    </PerformanceChartWrapper>
  );
};

export default WebsitePerformance;
