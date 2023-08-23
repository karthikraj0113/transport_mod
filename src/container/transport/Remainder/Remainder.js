import React,{useState} from 'react';
import { Row, Col, Button ,Select} from 'antd'; 
import { Cards } from '../../../components/cards/frame/cards-frame'; 
import CustomTable from './Table';
import {MaintenaceModal} from './maintenacemodal'; 
import { Main } from '../../styled';
import { PageHeader } from '../../../components/page-headers/page-headers'; 
import { Tabs } from 'antd';
import { useSelector } from 'react-redux'; 
import { VerticalForm } from './VerticalForm'; 
const { TabPane } = Tabs;
const { Option } = Select;

const Remainder = () => {    
  const [isCreateModalVisible, setisCreateModalVisible] = useState(false);  
  const toggleCreate = () => {
    setisCreateModalVisible(!isCreateModalVisible);
  };  
  const [isCreateModalVisible1, setisCreateModalVisible1] = useState(false);
  const toggleCreate1 = () => {
    setisCreateModalVisible1(!isCreateModalVisible1);
  };
  let org = useSelector(store => store.getOrgReducer); 
const columns = [
  {
    title: 'Vehicle No',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Reg No',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Remainder Type',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'KMs',
    key: 'tags',
    dataIndex: 'tags', 
  }, 
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date', 
  }, 
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status', 
  }, 
];
const data = [ 
];

  return (
    <>
      <PageHeader
        ghost
        title="Remainder"
        buttons={[
          <div key="1" className="page-header-actions">  
          <Button size="small" type="primary" onClick={toggleCreate}> 
            Create New
          </Button>         
          <Button size="small" type="primary" onClick={toggleCreate1}> 
              Setting
            </Button>
          </div>,
        ]}
      />
      <Main>
      <VerticalForm  isVisible={isCreateModalVisible1} handleOk={toggleCreate1} handleCancel={toggleCreate1} />
      <MaintenaceModal  isVisible={isCreateModalVisible} handleOk={toggleCreate} handleCancel={toggleCreate} /> 
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
      <Row gutter={25}>
      <Cards headless>
      <Tabs defaultActiveKey="1">
              <TabPane tab="Upcoming" key="1">
                <CustomTable col={columns} data={data} />
              </TabPane>
              <TabPane tab="Pending" key="2">
                <CustomTable col={columns} data={data} />
              </TabPane>
            </Tabs> 
      </Cards>
      </Row>
      </Main>
    </>
  );
};

export default Remainder;
