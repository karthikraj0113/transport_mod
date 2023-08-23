 import React,{useEffect} from 'react';
import { Modal, Button, Form, Select, Input, DatePicker, Space,InputNumber,Switch   } from 'antd';  
 
const { TextArea } = Input;  
const { confirm } = Modal;
const { RangePicker } = DatePicker; 

function Studentmodal({ isVisible,  handleOk, handleCancel}) {
  const [form] = Form.useForm();   
const onFinish = (values) => {
  console.log(values,'values'); 
} 
  function SwitchonChange(checked) {
      console.log(`switch to ${checked}`);
    }
  return (
    <Modal destroyOnClose={true}
      style={{ top: 20 }}
      title="Assign"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Confirm"
      cancelText="Cancel"
      width={750}
      footer={
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Button onClick={handleCancel} style={{ marginRight: 8 }} type="warning">
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" form="update_studentmodal">
          Update
        </Button>
        ,
      </div>
    }
    > 
    <Form preserve={false} form={form} name="update_studentmodal" onFinish={onFinish} layout="vertical"> 
      <Form.Item style={{marginBottom:'10px'}}
        name="van"
        label="Vehicle"
        rules={[
          {
            required: true,
          },
        ]}
      >        
        <Select showSearch
            placeholder="Select Van" 
            allowClear 
          > 
          <Option  value='33 (TN09CV1234)'>33 (TN09CV1234)</Option>  
          </Select>
      </Form.Item>   
      <Form.Item style={{marginBottom:'10px'}}
        name="is_good"
        label="Do you want to Activate/Deactivate?"
        valuePropName="checked"
      >  
      <Switch  onChange={SwitchonChange} />
      </Form.Item>    
    </Form>
    </Modal>
  );
}

export default Studentmodal;