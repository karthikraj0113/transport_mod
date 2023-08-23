import React, { useEffect, useState } from 'react';
import { Modal, Button, Row, Col, Select, Input, DatePicker, Card, InputNumber, Tabs, Form } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import './style.css' 

function Addroutes({ isVisible,  handleCancel,  }) {
  const onFinish = values => {
    console.log('Received values of form: ', route,"values",values);
  };
  let [route, setRoute] = useState({
    route: '',
    vehicle: '',
    startingPoint: '',
    endPoint: '',
    halt: [
      {
        waypoint: ''
      }
    ],
    organization_id: ''
  })

  return (
    <Modal
      destroyOnClose={true}
      bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 130px)' }}
      style={{ top: 20 }}
      title="Add Routes"
      visible={isVisible}
      // onOk={handleOk}
      onCancel={handleCancel}
      okText="Create"
      cancelText="Cancel"
      footer={[
        <Button type="primary" htmlType="submit" form="addroutes">
          submit
        </Button>,
      ]}
      width={800}
    >
      <Form className='jobroutestyle' name="addroutes" layout="vertical"   onFinish={onFinish}>
        <Form.Item
          label="Route name"
          name="Enter the name"
          rules={[{ required: true, message: 'Please fill Detail!' }]}
        >
          <Input style={{ height: '38px' }}
            onChange={(e) => {
              setRoute({ ...route, ['route']: e.target.value })
            }}
          />
        </Form.Item>
        <Form.Item
          label="Vehicles"
          name="vehicles"
          rules={[{ required: true, message: 'Please Select Vehicle Name!' }]}
        >
          <Select optionFilterProp="children"
            onChange={(value) => {
              setRoute({ ...route, ['vehicle']: value })
            }}
            placeholder="Select the vehicle"
            allowClear
          > 
                  <Option  value='33'>
                    33
                  </Option> 
          </Select>
        </Form.Item> 
        <Cards title='Pick Up' >
        <Form.Item style={{marginBottom:'5px'}}
          label="Starting Point"
          name="Starting Point"
          rules={[{ required: true, message: 'Please fill Detail!' }]}
        >
          <Input onChange={(e) => {
            setRoute({ ...route, ['startingPoint']: e.target.value })
          }} style={{ height: '38px' }} />
        </Form.Item>
        {
          route.halt.map((e, index) => {
            return <Form.Item style={{marginBottom:'5px'}}
              label={"Halt Point " + (index + 1)}
              name={"Halt Point " + (index + 1)}
              // rules={[{ required: true, message: 'Please fill Detail!' }]}
            >
              <Input value={e.waypoint} onChange={(e) => {
                let halt = route.halt;
                halt[index].waypoint = e.target.value
                setRoute({ ...route, ['halt']: halt })
              }} style={{ height: '38px', width: '70%' }} />
              <MinusCircleOutlined onClick={() => {
                let halt = route.halt;
                halt.splice(index, 1);
                setRoute({ ...route, ['halt']: halt })
              }} style={{ height: '38px', width: '20%'  ,color:'red'}}></MinusCircleOutlined>
            </Form.Item>
          })
        }
        <Form.Item style={{marginBottom:'5px'}}
          label="Add Halt Point"
          name="Add Halt Point"
        // rules={[{ required: true, message: 'Please fill Detail!' }]}
        >
          <Button size="small" onClick={() => {
            let halt = route.halt;
            halt.push({ waypoint: '' });
            setRoute({ ...route, ['halt']: halt })
          }}>
            <FeatherIcon icon="plus" size={15} />
            Add Halt Point
          </Button>
          {/* <PlusOutlined onClick={()=>{
            let halt = route.halt;
            halt.push({waypoint:''});
            setRoute({...route,['halt']:halt})
          }}style={{ height: '38px',width:'100%' }}></PlusOutlined> */}
          {/* <Input style={{ height: '38px' }} /> */}
        </Form.Item>
        <Form.Item style={{marginBottom:'5px'}}
          label="Destination"
          name="Destination"
          rules={[{ required: true, message: 'Please fill Detail!' }]}
        >
          <Input style={{ height: '38px' }} onChange={(e) => {
            setRoute({ ...route, ['endPoint']: e.target.value })
          }} />
        </Form.Item>
        </Cards>
        <Cards title='Drop' >
        <Form.Item style={{marginBottom:'5px'}}
          label="Starting Point"
          name="Starting Point"
          rules={[{ required: true, message: 'Please fill Detail!' }]}
        >
          <Input onChange={(e) => {
            setRoute({ ...route, ['startingPoint']: e.target.value })
          }} style={{ height: '38px' }} />
        </Form.Item>
        {
          route.halt.map((e, index) => {
            return <Form.Item style={{marginBottom:'5px'}}
              label={"Halt Point " + (index + 1)}
              name={"Halt Point " + (index + 1)}
              // rules={[{ required: true, message: 'Please fill Detail!' }]}
            >
              <Input value={e.waypoint} onChange={(e) => {
                let halt = route.halt;
                halt[index].waypoint = e.target.value
                setRoute({ ...route, ['halt']: halt })
              }} style={{ height: '38px', width: '70%' }} />
              <MinusCircleOutlined onClick={() => {
                let halt = route.halt;
                halt.splice(index, 1);
                setRoute({ ...route, ['halt']: halt })
              }} style={{ height: '38px', width: '20%' ,color:'red'}}></MinusCircleOutlined>
            </Form.Item>
          })
        }
        <Form.Item style={{marginBottom:'5px'}}
          label="Add Halt Point"
          name="Add Halt Point"
        // rules={[{ required: true, message: 'Please fill Detail!' }]}
        >
          <Button size="small" onClick={() => {
            let halt = route.halt;
            halt.push({ waypoint: '' });
            setRoute({ ...route, ['halt']: halt })
          }}>
            <FeatherIcon icon="plus" size={15} />
            Add Halt Point
          </Button>
          {/* <PlusOutlined onClick={()=>{
            let halt = route.halt;
            halt.push({waypoint:''});
            setRoute({...route,['halt']:halt})
          }}style={{ height: '38px',width:'100%' }}></PlusOutlined> */}
          {/* <Input style={{ height: '38px' }} /> */}
        </Form.Item>
        <Form.Item style={{marginBottom:'5px'}}
          label="Destination"
          name="Destination"
          rules={[{ required: true, message: 'Please fill Detail!' }]}
        >
          <Input style={{ height: '38px' }} onChange={(e) => {
            setRoute({ ...route, ['endPoint']: e.target.value })
          }} />
        </Form.Item>
        </Cards>         
      </Form>
    </Modal>
  );
}

export default Addroutes;
