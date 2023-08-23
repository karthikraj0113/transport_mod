import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Card } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons'; 
import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main } from '../../styled';
import { faPencilAlt } from '@fortawesome/pro-duotone-svg-icons';
import GoogleMap from './goglemap2' 
import Addroutes from './addroutesmodal';  
const { Option } = Select;   

const JobsRoutes = () => {   
  const [isAddrouteVisible, setisAddRouteVisible] = useState(false); 
  const toggleaddroute = () => {
    setisAddRouteVisible(!isAddrouteVisible);
  } 
  return (
    <div>
      <PageHeader
        ghost
        buttons={[
          <Row gutter={25}>
            <Col>
              
            <Select size="small" defaultValue={'Everwin Vidhyashram - Kolathur'}  style={{ width: 280 }}>                
                      <Option  value='Everwin Vidhyashram - Kolathur'> Everwin Vidhyashram - Kolathur  </Option> 
                      <Option  value='Everwin Vidhyashram - Perambur'> Everwin Vidhyashram - Perambur  </Option>
                      <Option  value='Everwin Vidhyashram - Mathur'> Everwin Vidhyashram - Mathur  </Option>
                      <Option  value='Everwin Public School'> Everwin Public School  </Option>
                      <Option  value='Everwin Matriculation Higher Secondary School'> Everwin Matriculation Higher Secondary School  </Option>
                </Select>
            </Col>
            <Col >              
            <Select size="small" defaultValue={'33'}  style={{ width: 280 }}>                
                      <Option  value='33'>33</Option>  
                </Select>
            </Col>
            <Col>
              <Button size="small" type="primary" onClick={toggleaddroute}>
                <FeatherIcon icon="plus" size={15} />
                Create New
              </Button>
            </Col>
          </Row>
        ]}
        title="Routes"
      />
      <Main> 
        <Addroutes  isVisible={isAddrouteVisible} handleOk={toggleaddroute} handleCancel={toggleaddroute} />
                <Row gutter={20}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title="Routes" extra={<><FontAwesomeIcon icon={faPencilAlt} onClick={toggleaddroute} style={{ fontSize: 15, color: 'green ', marginRight: '10px' }} />
              {/* <FontAwesomeIcon icon={faShareAlt} style={{ fontSize: 15, color: 'green ' }} /> */}
            </>}
            >
              <Row gutter={20}>
                <Col xs={12} sm={12} md={8}>
                  <p><strong>Start Address:</strong></p>
                  <p>Everwin Public School, 3rd Main Road,Everwin Public School, 3rd Main Road, Ayyavu</p>
                </Col>
                <Col xs={12} sm={12} md={8}>
                  <p><strong>12 Stopovers:</strong></p>
                  <p>25km</p>
                </Col>
                <Col xs={12} sm={12} md={8}>
                  <p><strong>End Address:</strong></p>
                  <p>Everwin Public School, 3rd Main Road, Ayyavu,Everwin Public School, 3rd Main Road, Ayyavu</p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <GoogleMap></GoogleMap>
          </Col>
        </Row>  
       
      </Main>
    </div>
  );
};

export default JobsRoutes;
