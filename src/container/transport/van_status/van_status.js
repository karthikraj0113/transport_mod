import React,{useState, lazy, Suspense} from 'react';
import { Row, Col, Tabs ,Select,Tag, Skeleton,Card,Table, Space ,Input, Tooltip} from 'antd'; 
import { PageHeader } from '../../../components/page-headers/page-headers'; 
import { useSelector } from 'react-redux'; 
import { Main } from '../../styled';  
import { 
  ChartjsStackedChart, 
} from './chartjs'; 
import Vanmodal  from './tablemodal'; 
const { Search } = Input;
const Van_status = () => {   
  const [isCreateModalVisible1, setisCreateModalVisible1] = useState(false);
  const toggleCreate1 = () => {
    setisCreateModalVisible1(!isCreateModalVisible1);
  };
  let grade = useSelector(store => store.getGradesReducer);
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
let [datasets1,setDatasets1]=useState([ 
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
let [datasets2,setDatasets2]=useState([
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
  return (
    <div> 
    <Vanmodal
    isVisible={isCreateModalVisible1} handleOk={toggleCreate1} handleCancel={toggleCreate1}/>
     <PageHeader
          ghost
          title="Van Status"
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
            <Col>
            <Search placeholder="Search" style={{ width: '180px', height: '38px' }} />
            </Col>
            </Row>
          ]}
        />
      <Main>    
              <Row gutter={25} >
              <Col   xxl={12} xl={12} sm={24} xs={24}>
      <Card title='33(TN09 AW81282)'  extra={ <span onClick={toggleCreate1} style={{color:'blue'}}>View More</span>} style={{marginBottom:'10px'}}>
              <ChartjsStackedChart datasets={datasets} />
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <p style={{marginBottom:'0px'}}><span>Van No: </span><br></br><span style={{color:'blue'}}>33(TN09 AW81282)</span></p>
              <p style={{marginBottom:'0px'}}><span>Route Name: </span><br></br><span style={{color:'blue'}}>Kolathur</span></p>
              <p style={{marginBottom:'0px'}}><span>Driver: </span><br></br><span style={{color:'blue'}}>S.Sathish</span></p>
              <p style={{marginBottom:'0px'}}><span>Distance: </span><br></br><span style={{color:'blue'}}>2 Way</span></p></div>
            </Card> 
              </Col>
              <Col   xxl={12} xl={12} sm={24} xs={24}>
      <Card title='33(TN09 AW81282)'  extra={ <span onClick={toggleCreate1} style={{color:'blue'}}>View More</span>} style={{marginBottom:'10px'}}>
              <ChartjsStackedChart datasets={datasets1} />
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <p style={{marginBottom:'0px'}}><span>Van No: </span><br></br><span style={{color:'blue'}}>33(TN09 AW81282)</span></p>
              <p style={{marginBottom:'0px'}}><span>Route Name: </span><br></br><span style={{color:'blue'}}>Kolathur</span></p>
              <p style={{marginBottom:'0px'}}><span>Driver: </span><br></br><span style={{color:'blue'}}>S.Sathish</span></p>
              <p style={{marginBottom:'0px'}}><span>Distance: </span><br></br><span style={{color:'blue'}}>2 Way</span></p></div>
            </Card> 
              </Col>
              <Col  xxl={12} xl={12} sm={24} xs={24}>
      <Card title='33(TN09 AW81282)'  extra={ <span onClick={toggleCreate1} style={{color:'blue'}}>View More</span>} style={{marginBottom:'10px'}}>
              <ChartjsStackedChart datasets={datasets2} />
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <p style={{marginBottom:'0px'}}><span>Van No: </span><br></br><span style={{color:'blue'}}>33(TN09 AW81282)</span></p>
              <p style={{marginBottom:'0px'}}><span>Route Name: </span><br></br><span style={{color:'blue'}}>Kolathur</span></p>
              <p style={{marginBottom:'0px'}}><span>Driver: </span><br></br><span style={{color:'blue'}}>S.Sathish</span></p>
              <p style={{marginBottom:'0px'}}><span>Distance: </span><br></br><span style={{color:'blue'}}>2 Way</span></p></div>
            </Card> 
              </Col>
              </Row> 
      </Main>
    </div>
  );
};

export default Van_status;
