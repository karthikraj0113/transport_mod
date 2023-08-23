import React,{useState, lazy, Suspense} from 'react';
import { Row, Col, Button,Tabs ,Select, Skeleton,Card} from 'antd'; 
import { Cards } from '../../../components/cards/frame/cards-frame';
import {  useHistory } from 'react-router-dom';  
import CustomTable from './Table';
// import { VerticalForm } from './VerticalForm'; 
import { Main } from '../../styled';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../../components/page-headers/page-headers'; 
import {FuelModal} from './FuelModal'
import {ServiceModal} from './Servicemodal'
const WebsitePerformance = lazy(() => import('./WebsitePerformance'));
const { TabPane } = Tabs;
const { Option } = Select;

const Service_Settings = () => {    
  const history = useHistory();
    let org = useSelector(store => store.getOrgReducer); 
  const [isCreateModalVisible, setisCreateModalVisible] = useState(false);
  const [isCreateModalVisible1, setisCreateModalVisible1] = useState(false);
  const toggleCreate = () => {
    setisCreateModalVisible(!isCreateModalVisible);
  };
  const toggleCreate1 = () => {
    setisCreateModalVisible1(!isCreateModalVisible1);
  }; 
const columns = [
  {
    title: 'Vehicle No',
    dataIndex: 'Vehicle_No',
    key: 'Vehicle_No', 
  },
  {
    title: 'Reg No',
    dataIndex: 'Reg_No',
    key: 'Reg_No',
  },
  {
    title: 'Fuel Type',
    dataIndex: 'Fuel_Type',
    key: 'Fuel_Type',
  },
  {
    title: 'Age',
    key: 'Age',
    dataIndex: 'Age', 
  }, 
  {
    title: 'Kms',
    key: 'Kms',
    dataIndex: 'Kms', 
  }, 
  {
    title: 'Total Service',
    key: 'Total_Service',
    dataIndex: 'Total_Service', 
  }, 
  {
    title: 'Avg Cost Per kms',
    key: 'Avg_Cost_Per_kms',
    dataIndex: 'Avg_Cost_Per_kms', 
  }, 
  {
    title: 'Shift',
    key: 'Shift',
    dataIndex: 'Shift', 
  }, 
];
const columns1 = [
  {
    title: 'Vehicle No',
    dataIndex: 'Vehicle_No',
    key: 'Vehicle_No', 
  },
  {
    title: 'Reg No',
    dataIndex: 'Reg_No',
    key: 'Reg_No',
  },
  {
    title: 'Fuel Type',
    dataIndex: 'Fuel_Type',
    key: 'Fuel_Type',
  },
  {
    title: 'Age',
    key: 'Age',
    dataIndex: 'Age', 
  }, 
  {
    title: 'Kms',
    key: 'Kms',
    dataIndex: 'Kms', 
  }, 
  {
    title: 'Total Fuel',
    key: 'Total_Fuel',
    dataIndex: 'Total_Fuel', 
  }, 
  {
    title: 'Avg Cost Per Month',
    key: 'Avg_Cost_Per_Month',
    dataIndex: 'Avg_Cost_Per_Month', 
  }, 
  {
    title: 'Mileage',
    key: 'Mileage',
    dataIndex: 'Mileage', 
  }, 
  {
    title: 'Shift',
    key: 'Shift',
    dataIndex: 'Shift', 
  }, 
];
const data = [ 
];

  return (
    <>
      <PageHeader
        ghost
        title="Service&Maintenance"
        buttons={[
            <div key="1" className="page-header-actions"> 
            <Button size="small" type="primary" onClick={toggleCreate1}> 
              Setting
            </Button>
            <Button size="small" type="primary" onClick={toggleCreate}> 
              Create 
            </Button>
          </div>,
        ]}
      />
      <Main>
      <Row gutter={20} justify="end">
            <Col xxl={6} lg={6} md={6} sm={24} xs={24}>
            <Select size="small" defaultValue={'Everwin Vidhyashram - Kolathur'}  style={{ width: 280 }}>                
                      <Option  value='Everwin Vidhyashram - Kolathur'> Everwin Vidhyashram - Kolathur  </Option> 
                      <Option  value='Everwin Vidhyashram - Perambur'> Everwin Vidhyashram - Perambur  </Option>
                      <Option  value='Everwin Vidhyashram - Mathur'> Everwin Vidhyashram - Mathur  </Option>
                      <Option  value='Everwin Public School'> Everwin Public School  </Option>
                      <Option  value='Everwin Matriculation Higher Secondary School'> Everwin Matriculation Higher Secondary School  </Option>
                </Select>
              </Col>
            </Row><br></br>
      <FuelModal  isVisible={isCreateModalVisible} handleOk={toggleCreate} handleCancel={toggleCreate} /> 
      <ServiceModal  isVisible={isCreateModalVisible1} handleOk={toggleCreate1} handleCancel={toggleCreate1} /> 
      
      <Card   moreText={true} extra={ <span onClick={() =>history.push({ pathname: '/admin/bus'})} style={{color:'blue'}}>View More</span>}> 
      <Row gutter={25}>          
      <Col md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <WebsitePerformance title='Service'/>
            </Suspense>
          </Col>
          <Col md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <WebsitePerformance title='Fuel' />
            </Suspense>
          </Col>
      </Row>
          </Card ><br></br><br></br>
      <Row gutter={25}>
      <Cards headless>      
      <Tabs defaultActiveKey="1">
              <TabPane tab="Service" key="1">
                <CustomTable col={columns} data={data} />
              </TabPane>
              <TabPane tab="Fuel" key="2">
                <CustomTable col={columns1} data={data} />
              </TabPane>
            </Tabs> 
      </Cards>
      </Row>
      </Main>
    </>
  );
};

export default Service_Settings;
