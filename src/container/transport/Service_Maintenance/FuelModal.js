import React,{useState} from 'react';
import { Form, Input, Button, Modal, InputNumber, DatePicker, Select  } from 'antd';
// import { VerticalFormStyleWrap } from '../style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const FuelModal = ({ isVisible, handleOk, handleCancel }) => { 
  return (
    <Modal  destroyOnClose={true}
    style={{ top: 20 }}
    title="Create Fuel Entry"
    visible={isVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    okText="Create"
    cancelText="Cancel"
    footer={[ 
              <Button className="btn-signin" type="primary" size="large">
                Save
              </Button>
    ]}
    width={500}>  
          <Form preserve={false} name="fuel-form" layout="vertical">
            <Form.Item name="date"   label="Date">
              <DatePicker style={{ height:'38px' ,width:'-webkit-fill-available'}}/>
            </Form.Item>
            <Form.Item name="Vehicle_Number"   label="Vehicle Number">
            <Select optionFilterProp="children" showSearch  ><Option>1</Option></Select>
            </Form.Item>
            <Form.Item name="Odometer"   label="Odometer">
            <Input type='number' style={{ height:'38px'}} />
            </Form.Item>
            <Form.Item name="Cost_Per_ltr"   label="Cost Per ltr">
            <Input type='number' style={{ height:'38px'}}/>
            </Form.Item> 
            <Form.Item name="No_Of_ltr"   label="No Of ltr">
            <Input type='number' style={{ height:'38px'}} />
            </Form.Item> 
            <Form.Item name="Amount"   label="Amount (Rs.)">
              <Input type='number' style={{ height:'38px'}} />
            </Form.Item> 
          </Form> 
  </Modal> 
  );
};

export { FuelModal };
