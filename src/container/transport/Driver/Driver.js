import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Select ,Switch} from 'antd';
import { Cards } from '../../../components/cards/frame/cards-frame';
import CustomTable from './Table';
import { CreateDriver } from './drivermodal';
import { Main } from '../../styled'; 
 import { PageHeader } from '../../../components/page-headers/page-headers';
import FeatherIcon from 'feather-icons-react';
const Option = Select.Option; 
const Driver = () => {
  const [isCreateModalVisible, setisCreateModalVisible] = useState(false); 
  const toggleCreate = () => {
    setisCreateModalVisible(!isCreateModalVisible);
  };

  const columns = [
    {
      title: "Branch",
      dataIndex: "Branch",
      key: "branch",
      fixed: "left",
    },
    {
      title: "Employee Number",
      dataIndex: "EmployeeNumber",
      key: "employeeNumber",
      fixed: "left",
    },
    {
      title: "Employee Name", 
      dataIndex: "employeeName",
      key: "employeeName",
      fixed: "left",
    }, 
    {
      title: "Designation", 
      dataIndex: "designationId",
      key: "designationId",
    },
    {
      title: "Reporting Authority",
      dataIndex: "reportingAuthority", 
      key: "reportingAuthority",
    },
    {
      title: "Mobile", 
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Email", 
      dataIndex: "email",
      key: "email",
    },
    {
      title: "PF No", 
      dataIndex: "PF",
      key: "PF",
      fixed: "right",
    },

    // {
    //   title: 'Action',
    //   dataIndex: 'action',
    //   align: 'left',
    //   width: 190,
    //   fixed: "right",
    // },
  ];
  const data1=[
    
    {
      key: '1',
      Branch: 'Perambur',
      EmployeeNumber: 'EVP122',  
      employeeName:'Palani S',  
      designationId:'Driver',
      reportingAuthority:'Mrs. KAVITHA SHREE R R',
      mobile:'7946211749',
      email:'palani03@gmail.com',
       PF:<Switch size="small" checked="true" style={{ margin: '10px' }} />
    }, 
    {
      key: '2',
      Branch: 'Perambur',
      EmployeeNumber: 'EVP182',  
      employeeName:'Dhandapani R',  
      designationId:'Driver',
      reportingAuthority:'Ms. SUBHASHREE D D',
      mobile:'8424628514',
      email:'dhandapani@gmail.com',
       PF:<Switch size="small" checked="true" style={{ margin: '10px' }} />
    }, 
    {
      key: '3',
      Branch: 'Surapet',
      EmployeeNumber: 'EVS102',  
      employeeName:'Praveen Kumar G',  
      designationId:'Driver',
      reportingAuthority:'Mrs. KAVITHA SHREE R R',
      mobile:'7142755498',
      email:'praveen_kumar9@gmail.com',
      PF:<Switch size="small" checked="true" style={{ margin: '10px' }} />
  
    }, 
    {
      key: '4',
      Branch: 'Mathur',
      EmployeeNumber: 'EVM182',  
      employeeName:'Senthil Babu M',  
      designationId:'Driver',
      reportingAuthority:'Ms. SUBHASHREE D D',
      mobile:'8345629345',
      email:'babu_59@gmail.com',
       PF:<Switch size="small" checked="false" style={{ margin: '10px' }} />
    }, 
    {
      key: '5',
      Branch: 'Kolathur',
      EmployeeNumber: 'EVK407',  
      employeeName:'Dinesh Kumar M',  
      designationId:'Driver',
      reportingAuthority:'DEVAN M',
      mobile:'7547348456',
      email:'dinesh_kumar34@gmail.com',
       PF:<Switch size="small" checked="true" style={{ margin: '10px' }} />
    }, 
    {
      key: '6',
      Branch: 'Maduravoyal',
      EmployeeNumber: 'EPS169',  
      employeeName:'Jagadeesh M',  
      designationId:'Driver',
      reportingAuthority:'Mrs. PRIYA SHREE A H',
      mobile:'8465807346',
      email:'jagadeesh43@gmail.com',
       PF:<Switch size="small" checked="true" style={{ margin: '10px' }} />
    }, 
    {
      key: '7',
      Branch: 'Maduravoyal',
      EmployeeNumber: 'EPS162',  
      employeeName:'Sathish Kumar M',  
      designationId:'Driver',
      reportingAuthority:'Mrs. PRIYA SHREE A H',
      mobile:'9475738471',
      email:'sathish007@gmail.com',
       PF:<Switch size="small" checked="false" style={{ margin: '10px' }} />
    }, 
  ] 
  return (
    <>
      <PageHeader
        ghost
        title="Driver"
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
              <Button size="middle" type="primary" onClick={toggleCreate}>
                <FeatherIcon icon="plus" size={15} />
                Add Driver
              </Button>
            </Col>
          </Row>
        ]}
      />
      <Main>
        <CreateDriver visible={isCreateModalVisible}  handleClose={toggleCreate} />
        <Row gutter={25}>
          <Cards headless>
            <CustomTable col={columns} data={data1} />
          </Cards>
        </Row>
      </Main>
    </>
  );
};

export default Driver;
