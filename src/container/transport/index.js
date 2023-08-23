import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Card, Tag } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/pro-duotone-svg-icons';
import { Main } from '../styled'; 
import { CardBarChart2, OverviewSalesCard } from './style';
import { faTruckContainer, faTools, faTruck } from '@fortawesome/pro-light-svg-icons'; 
import TransportModal from './transportModal'; 
import GoogleMap from './googleMap';
const { Option } = Select;

const Transport = () => {

  const [isCreateModalVisible, setisCreateModalVisible] = useState(false); 
  const [latLang, SetLatLAng] = useState({ lat: "13.059415", lang: "80.1726366" });  
  const toggleCreate = () => {
    setisCreateModalVisible(!isCreateModalVisible);
  }; 
  return (
    <div>
      <PageHeader
        ghost
        buttons={[
          <Row gutter={10}>
            <Col>              
            <Select size="small" defaultValue={'Everwin Vidhyashram - Kolathur'}  style={{ width: 280 }}>                
                      <Option  value='Everwin Vidhyashram - Kolathur'> Everwin Vidhyashram - Kolathur  </Option> 
                      <Option  value='Everwin Vidhyashram - Perambur'> Everwin Vidhyashram - Perambur  </Option>
                      <Option  value='Everwin Vidhyashram - Mathur'> Everwin Vidhyashram - Mathur  </Option>
                      <Option  value='Everwin Public School'> Everwin Public School  </Option>
                      <Option  value='Everwin Matriculation Higher Secondary School'> Everwin Matriculation Higher Secondary School  </Option>
                </Select>
            </Col>
            <Col>
              <Button size="small" type="primary" onClick={toggleCreate}>
                <FeatherIcon icon="plus" size={15} />
                Add Vehicle
              </Button>
            </Col>
          </Row>

        ]}
        title="Live Tracker"
      />
      <Main>
        <TransportModal isVisible={isCreateModalVisible} handleOk={toggleCreate} handleCancel={toggleCreate} />
          <Row gutter={25}>
          <Col sm={24} xs={24} md={6} lg={6} xxl={6}>
            <Cards headless>
              <OverviewSalesCard>
                <div className="icon-box box-secondary" style={{ alignItems: 'center', backgroundColor: 'white' }}>
                  <FontAwesomeIcon icon={faTruck} style={{ fontSize: '35px', color: '#f63178' }} />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>1</h2>
                    <span>No. of Vehicles</span>
                  </CardBarChart2>
                </div>
              </OverviewSalesCard>
            </Cards>
          </Col>
          <Col sm={24} xs={24} md={6} lg={6} xxl={6}>
            <Cards headless>
              <OverviewSalesCard>
                <div className="icon-box box-primary" style={{ alignItems: 'center', backgroundColor: 'white' }}>
                  <FontAwesomeIcon icon={faTruckContainer} style={{ fontSize: '35px', color: '#5f63f2' }} />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>0</h2>
                    <span>Running</span>
                  </CardBarChart2>
                </div>
              </OverviewSalesCard>
            </Cards></Col>
          <Col sm={24} xs={24} md={6} lg={6} xxl={6}>
            <Cards headless>
              <OverviewSalesCard>
                <div className="icon-box box-primary" style={{ alignItems: 'center', backgroundColor: 'white' }}>
                  <FontAwesomeIcon icon={faTruck} style={{ fontSize: '35px', color: 'rgb(242 116 122)' }} />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>1</h2>
                    <span>Idle</span>
                  </CardBarChart2>
                </div>
              </OverviewSalesCard>
            </Cards></Col>
          <Col sm={24} xs={24} md={6} lg={6} xxl={6}>
            <Cards headless>
              <OverviewSalesCard>
                <div className="icon-box box-success" style={{ alignItems: 'center', backgroundColor: 'white' }}>
                  <FontAwesomeIcon icon={faTools} style={{ fontSize: '35px', color: '#20c997' }} />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>0</h2>
                    <span>Repair</span>
                  </CardBarChart2>
                </div>
              </OverviewSalesCard>
            </Cards>
          </Col></Row>
        <Row gutter={15}>
          <Col xxl={12} md={12} sm={24} xs={24}>
            <Row gutter={10}>
              <Col xxl={15} lg={15} md={12} sm={24} xs={24} style={{ marginBottom: '10px' }}>
                <Select style={{ width: '100%' }}   placeholder="Select Vehicles" size="middle"> 
                        <Option  value='33'>
                          33
                        </Option> 
                </Select>
              </Col>
            </Row> 
               <Card >
                <Row gutter={20}>
                  <Col xs={12} sm={12} md={10}>
                    <p style={{ marginBottom: '6px' }}><strong>Vehicle Name: </strong>33</p>
                  </Col>
                  <Col xs={12} sm={12} md={10}>
                    <p style={{ marginBottom: '6px' }}><strong>Vehicle No: </strong>TN12Z5301</p>
                  </Col>
                  <Col xs={12} sm={12} md={2}>
                    {/* <FontAwesomeIcon icon={faEdit} style={{ fontSize: 15, color: 'green' }}  */}
                    {/* onClick={toggledriver} */}
                    {/*  /> */}
                  </Col>
                  <Col xs={12} sm={12} md={2}>
                    {/* <FontAwesomeIcon icon={faShareAlt} style={{ fontSize: 15, color: 'blue' }} /> */}
                  </Col>
                </Row>
                <p style={{ marginBottom: '6px' }}> <strong>Driver Name: </strong>sample</p>
                <p style={{ marginBottom: '6px' }}> <strong>Driver Status: </strong><Tag style={{ backgroundColor: '#0CAB7C', color: 'white' }}>Active</Tag></p>
                <p style={{ marginBottom: '6px' }}>
                  <FontAwesomeIcon icon={faClock} style={{ fontSize: 15, color: 'gray ' }} /> &nbsp; <stong>An Hour </stong>|{' '}
                  <span style={{ color: 'green' }}>IDLE</span> &nbsp; &nbsp; <strong>Speed</strong> | '0'
                </p>
                {/* <p style={{ marginBottom: '6px' }}> 
                  <span style={{ color: 'rgb(32, 201, 151)', fontWeight: 'bold' }}> &nbsp; {()=>{
                    let school = org.find(item=> item.organization_id == vechile.organization_id)
                    return school.instituteName
                  }}</span>
                </p> */}
              </Card>  

          </Col>
            <Col md={12} sm={24} xs={24} lg={12}>
              <GoogleMap marker={{ lat: latLang.lat, lng: latLang.lang }} />
            </Col>  

        </Row>
        {/* {
          vechile ? null : <Card headless>
            <h3> Select the vehicle to view </h3>
          </Card>
        } */}
      </Main>
    </div>
  );
};

export default Transport;
