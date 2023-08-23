import React,{useState, } from 'react';
import { Row, Col, Tabs ,Select,Tag,  Table, Space , Tooltip} from 'antd'; 
import { PageHeader } from '../../../components/page-headers/page-headers'; 
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame'; 
import { UserTableStyleWrapper } from './style';
import { TableWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPencil, faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { Main } from '../../styled';  
import { 
  ChartjsStackedChart, 
} from './chartjs';
import UpdateStudentModal  from './studentmodal';
import {   
  ChartjsDonutChart, 
} from './chartjs copy';
const { TabPane } = Tabs;
const Student = () => {    
  let [datasets,setDatasets]=useState([
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: 'rgba(0,23,55, .5)',
      label: 'BOYS',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: 'rgba(28,225,172, .5)',
      label: 'GIRLS',
    },
])  
  const [isCreateModalVisible1, setisCreateModalVisible1] = useState(false);
  const toggleCreate1 = () => {
    setisCreateModalVisible1(!isCreateModalVisible1);
  }; 
  const usersTableColumns = [
    {
      title: 'Student Name',
      dataIndex: 'Student_Name',
      key: 'Student_Name',
      fixed: "left",
    },
    {
      title: 'Level',
      dataIndex: 'Level',
      key: 'Level', 
    },
    {
      title: 'Class',
      dataIndex: 'Class',
      key: 'Class',
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
      width:'40%'
    },
    {
      title: 'Area',
      dataIndex: 'Area',
      key: 'Area',
    },
    {
      title: 'Pincode',
      dataIndex: 'Pincode',
      key: 'Pincode',
    },
    {
      title: 'Direction',
      dataIndex: 'Direction',
      key: 'Direction',
    },
    {
      title: 'Fee Status',
      dataIndex: 'Fee_Status',
      key: 'Fee_Status',
    },
    {
      title: 'Van No',
      dataIndex: 'Van_No',
      key: 'Van_No',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      fixed: "right",
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action', 
      fixed:"right",
    },
  ];

  const data1=[
    
    {     
          key: 1,
          Student_Name:<span> <img
          className="task-author"
          style={{ width: '40px',borderRadius:'30px',marginRight:'5px' }}
          src={require('../../../static/img/users/1.png')}
          alt=""
        />Dinesh</span>,
          Level:'X',
          Class: 'Excellent',
          Address: <span>No.12 6th main road gomathi puram villivakkam-600034</span>,
          Area: 'Kolathur',
          Pincode:'602022',
          Direction:'2 Way',
          Fee_Status:<Tag style={{color:'white',backgroundColor:'green'}}> Paid </Tag>,
          Van_No:'33 (TN09CV1234)',
          status: <Tag style={{color:'white',backgroundColor:'green'}}>Active</Tag>,
          action: (
            <div className="table-actions">
              <>
              <Space size="middle">
              <Tooltip title="Edit">
              <FontAwesomeIcon
                icon={faPencil}
                onClick={toggleCreate1}
                style={{ fontSize: 15, color: 'green ' }}
              />
              </Tooltip> 
             
            </Space>
              </>
            </div>
          ),
        },  
  ] 
  const rowSelection = {
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
       <UpdateStudentModal
       isVisible={isCreateModalVisible1} handleOk={toggleCreate1} handleCancel={toggleCreate1}/>
     <PageHeader
          ghost
          title="Student"
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
            </Row>
          ]}
        />
      <Main>  
              <Row gutter={25}>            
              <Col xxl={16} lg={16} md={16} sm={24} xs={24}>  
             <Cards title='Levelwise Van Students'>
              <ChartjsStackedChart datasets={datasets} />
              </Cards>
              </Col>
              <Col xxl={8} lg={8} md={8} xs={24}>
              <Cards title='Area wise van students'>
              <ChartjsDonutChart />
              {/* <ChartjsStackedChart datasets={datasets1} /> */}
               </Cards> 
              </Col>
               </Row>
               <Row style={{ marginTop: '10px', marginBottom: '20px', justifyContent: 'end' }}>
               <Col style={{ marginRight: '5px' }}>             
              <Select placeholder="Select Area"   style={{ width: '180px' }}>
              <Option value="Chennai">Chennai</Option> 
              </Select>
            </Col>
            <Col style={{ marginRight: '5px' }}>             
              <Select placeholder="Select Pincode"   style={{ width: '180px' }}>
              <Option value="602024">602024</Option> 
              </Select>
            </Col>
            <Col style={{ marginRight: '5px' }}> 
              <Select
                placeholder="Select Class" 
                style={{ width: '180px' }}
              > 
                  
              <Option value="Chennai">I</Option> 
              </Select>
            </Col>
            <Col style={{ marginRight: '5px' }}> 
              <Select
                placeholder="Select Van" 
                style={{ width: '180px' }}
              > 
                    <Option value='33 (TN09CV1234)'>
                    33 (TN09CV1234)
                    </Option> 
              </Select>
            </Col>
            <Col style={{ marginRight: '5px' }}>
            <Select
                placeholder="Select Direction" 
                style={{ width: '180px' }}
              > 
                    <Option value='Pick Up'>Pick Up</Option> 
                    <Option value='Drop'>Drop</Option> 
                    <Option value='2 Way'>2 Way</Option> 
              </Select>
            </Col>
        </Row>
        <Row gutter={25}>
      <Cards headless>      
      <Tabs defaultActiveKey="1">
              <TabPane tab="Not Assigned" key="1"> 
                <UserTableStyleWrapper>
                  <TableWrapper className="table-responsive">
                    <Table
                      rowSelection={rowSelection}
                      dataSource={data1}
                      columns={usersTableColumns} 
                    />
                  </TableWrapper>
                </UserTableStyleWrapper> 
              </TabPane>
              <TabPane tab="Assigned" key="2">
              <UserTableStyleWrapper>
              <Row justify='end' style={{marginBottom:'5px'}}>
          <Button
                size="small"
                onClick={toggleCreate1}
                type="primary"
              > 
                Bulk Assign
              </Button></Row>
                  <TableWrapper className="table-responsive">
                    <Table
                      rowSelection={rowSelection}
                      dataSource={data1}
                      columns={usersTableColumns} 
                    />
                  </TableWrapper>
                </UserTableStyleWrapper> 
              </TabPane>
            </Tabs> 
      </Cards>
      </Row>
      </Main>
    </div>
  );
};

export default Student;
