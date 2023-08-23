import React,{ useEffect,useState } from 'react';
import { Modal, Button, Row, Col, Select, Input, DatePicker, Space,InputNumber,Upload, message,Form  } from 'antd';
import {
  UploadOutlined ,
} from '@ant-design/icons';
const layout = {
  labelCol: { span: 6 },
};
const { Option } = Select; 
function TransportModal({ isVisible,  handleOk, handleCancel,  }) {
  const [form] = Form.useForm(); 
  const [requiredMark, setRequiredMarkType] = useState('required');
  let handleSelect = (value, e) => {
    setRecord({ ...record, [e]: value })
  } 
  return (
    <Modal 
    destroyOnClose={true}
      style={{ top: 20 }}
      title="Add Vehicle"
      visible={isVisible}    
      onCancel={handleCancel} 
      okText="Create"
      cancelText="Cancel"
      footer={[
        <Button  type="primary" htmlType="submit" form="expenses">
          Submit
        </Button>,
      ]}
      width={800}
    >
      <Form preserve={false} {...layout} form={form} name="nest-messages" id="expenses" 
        onFinish={() => {
          handleOk();
          form.resetFields();
        }}
      >
        <Form.Item label='Institute' name='organization_id' rules={[{ required: true, message: 'Please input your details!' }]}>
        <Select size="small" defaultValue={'Everwin Vidhyashram - Kolathur'}  style={{ width: '100%' }}>                
                      <Option  value='Everwin Vidhyashram - Kolathur'> Everwin Vidhyashram - Kolathur  </Option> 
                      <Option  value='Everwin Vidhyashram - Perambur'> Everwin Vidhyashram - Perambur  </Option>
                      <Option  value='Everwin Vidhyashram - Mathur'> Everwin Vidhyashram - Mathur  </Option>
                      <Option  value='Everwin Public School'> Everwin Public School  </Option>
                      <Option  value='Everwin Matriculation Higher Secondary School'> Everwin Matriculation Higher Secondary School  </Option>
                </Select>
        </Form.Item>
          <h3>Identifications</h3><hr></hr>
          <Form.Item label="Vehicle_Number"  name="Vehicle_Number" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input  />
        </Form.Item>
        <Form.Item label="Vehicle_Name"  name="Vehicle_Name" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="VIN"  name="VIN" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Vehicle_Type" name="Vehicle_Type" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input name="Vehicle_Type" />

        </Form.Item>
        <Form.Item label="Year"  name="Year" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input  />
        </Form.Item>
        <Form.Item label="Maker" name="Maker" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input />
        </Form.Item>
        <Form.Item label="Model" name="Model" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input />
        </Form.Item>
        <Form.Item label="Fuel_Type" name="Fuel_Type" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Select   placeholder="select the BatchType" allowClear>
          <Option value="Petrol">Petrol</Option>
          <Option value="Disel">Disel</Option>
          <Option value="LPG">LPG</Option>
          <Option value="Electric">Electric</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Trim"  name="Trim" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input  />
        </Form.Item>
        <Form.Item label="Registration_State"  name="Registration_State" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input  />
        </Form.Item>
        <Form.Item label="Registration_Date" name="Registration_Date2" rules={[{ required: true, message: 'Please input your details!' }]}>
        <DatePicker format="DD-MM-YYYY"   style={{ width: '100%',height:'40px' }} />
        </Form.Item>
        <Form.Item label="Axle" name="Axle" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input  />
        </Form.Item>
        <Form.Item label="Vendor_Name" name="Vendor_Name" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input   />
        </Form.Item>
        <Form.Item  label="Photo" name="Photo" rules={[{ required: true, message: 'Please select your File!' }]}>
        <Upload  >
              <Button icon={<UploadOutlined />} style={{ marginTop: '15%' }}>
                Select File
              </Button>
            </Upload>
      </Form.Item>
       <h3>Classifications</h3><hr/>
       <Form.Item label="Vehicle_Status" name="Vehicle_Status" rules={[{ required: true, message: 'Please input your details!' }]}>
       <Input  />
        </Form.Item>
        <Form.Item label="Group" name="Group" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input  />
        </Form.Item>
        <Form.Item label="Driver" name="Driver" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Select  placeholder="select the Driver" allowClear> 
              <Option  value='1'>
                1
              </Option> 
          </Select>
        </Form.Item>
        <Form.Item label="Vehicle_ownership" name="Vehicle_ownership" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input  />
        </Form.Item>
        <h3>Additional Details</h3><hr/>
        <Form.Item label="Color"  name="Color" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input />
        </Form.Item>
        <Form.Item label="Body_Type" name="Body_type" rules={[{ required: true, message: 'Please input your details!' }]}>
        <Input  />
        </Form.Item>
        <Form.Item label="Body_Subtype" name="Body_Subtype" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input  />
        </Form.Item>
        <Form.Item label="MSRP"  name="MSRP" rules={[{ required: true, message: 'Please input your details!' }]}>
          <Input  />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default TransportModal;
