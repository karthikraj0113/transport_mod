import React,{useState} from 'react';
import { Form, Input, Button, Modal,Space  ,Upload,DatePicker, Select} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import { VerticalFormStyleWrap } from '../style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;
const ServiceModal = ({ isVisible, handleOk, handleCancel }) => { 
  const initialValue={
    users:[{
      
    }
    ]
  }
  return (
    <Modal  destroyOnClose={true}
    style={{ top: 20 }}
    title="Create Service Entry"
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
    width={550}>  
            <Form preserve={false} initialValues={initialValue} name="service-form" layout="vertical">
            <Form.Item name="date"   label="Date">
              <DatePicker style={{ height:'38px' ,width:'-webkit-fill-available'}}/>
            </Form.Item>
            <Form.Item name="Vehicle_Number"   label="Vehicle Number">
            <Select optionFilterProp="children" showSearch  ><Option>1</Option></Select>
            </Form.Item>
            <Form.Item name="servicetype"   label="Service Type">
            <Select>
              <Option>1</Option>
            </Select>
            </Form.Item>
            <Form.List name={"users"}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8,justifyContent:'space-between',alignItems:'center' }} align="baseline">
                      <Form.Item label='Particulars'
                        {...restField}
                        name={[name, 'first']}
                        rules={[{ required: true, message: 'Missing first name' }]}
                      >
                        <Input style={{height:'38px'}}/>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        label='Amount'
                        name={[name, 'last']}
                        rules={[{ required: true, message: 'Missing last name' }]}
                      >
                        <Input style={{height:'38px'}} type='number' placeholder="enter amount" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add Amount
                    </Button>
                  </Form.Item>
                  <Form.Item 
                      label='Total Amount'  >
                    <Input style={{height:'38px'}} disabled/>
                  </Form.Item>
                </>
              )}
           </Form.List>
            <Form.Item name="Attachment"   label="Attachment">
            <Upload >
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
            </Form.Item> 
          </Form>  
  </Modal> 
  );
};

export { ServiceModal };
