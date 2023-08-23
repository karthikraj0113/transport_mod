import React,{useState, lazy, Suspense} from 'react';
import { Row, Col, Button,Tabs ,Select, Skeleton,Card} from 'antd'; 
import { Cards } from '../../../components/cards/frame/cards-frame'; 
import { Main } from '../../styled'; 
import { PageHeader } from '../../../components/page-headers/page-headers';  
import { 
  ChartjsStackedChart, 
} from './chartjs'; 
const { Option } = Select;

const Bus = () => {       
        let [datasets,setDatasets]=useState([
              { label: 'Kms Run',
                data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                backgroundColor: 'rgb(95, 99, 242)',
              }, 
            ])
        let [datasets1,setDatasets1]=useState([
              {label: 'Fuel ',
                data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                backgroundColor: 'rgb(250, 139, 12)',
              },
        ])
        let [datasets2,setDatasets2]=useState([
            {label: 'Service cost ',
              data: [10, 80, 90, 40, 60, 55, 45, 35, 30, 20, 15, 20],
              backgroundColor: 'rgb(32, 201, 151)',
            },
        ]) 

  return (
    <>
      <PageHeader
        ghost
        title="Bus" 
      />
      <Main>
      <Row gutter={10} >
      <Col >
              <Select size="small"  style={{ width: 280 }}> 
                            <Option  value='Bus1'>
                              Bus 1
                            </Option> 
                      </Select>
              </Col>
            <Col >
             
            <Select size="small" defaultValue={'Everwin Vidhyashram - Kolathur'}  style={{ width: 280 }}>                
                      <Option  value='Everwin Vidhyashram - Kolathur'> Everwin Vidhyashram - Kolathur  </Option> 
                      <Option  value='Everwin Vidhyashram - Perambur'> Everwin Vidhyashram - Perambur  </Option>
                      <Option  value='Everwin Vidhyashram - Mathur'> Everwin Vidhyashram - Mathur  </Option>
                      <Option  value='Everwin Public School'> Everwin Public School  </Option>
                      <Option  value='Everwin Matriculation Higher Secondary School'> Everwin Matriculation Higher Secondary School  </Option>
                </Select>
              </Col>
            </Row><br></br>  
            <Cards title='Bus1' size="large">
              <Row gutter={25}>
              <Col xxl={6} xl={8} sm={12} xs={24}>
              <ChartjsStackedChart datasets={datasets} />
              </Col>
              <Col xxl={6} xl={8} sm={12} xs={24}>
              <ChartjsStackedChart datasets={datasets1} />
              </Col>
              <Col  xxl={6} xl={8} sm={12} xs={24}>
              <ChartjsStackedChart datasets={datasets2} />
              </Col></Row>
            </Cards> 
      </Main>
    </>
  );
};

export default Bus;
