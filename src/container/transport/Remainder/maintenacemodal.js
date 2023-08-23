import React  from 'react';
import { Modal, Button, Row, Col, Select, Input, DatePicker, Space,InputNumber,Form  } from 'antd';
import { PlusOutlined ,MinusCircleOutlined,
} from '@ant-design/icons'; 
const Option = Select.Option; 
 const { confirm } = Modal;
 const { RangePicker } = DatePicker; 
function MaintenaceModal({ isVisible, handleOk ,handleCancel }) {
  const [form] = Form.useForm();   
const onFinish = (values) => {
    console.log('Received values of form:', values);  
  }; 
  const initialValue={
    service:[{
      
    }
    ]
  }
  return (
    <Modal destroyOnClose={true}
    bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 130px)' }}
      style={{ top: 20 }}
      title="Remainder"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Confirm"
      cancelText="Cancel"
      width={750} footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={handleCancel} style={{ marginRight: 8 }} type="warning">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" form="Remainder">
            Create 
          </Button>
          ,
        </div>
      }
    > 
    <Form preserve={false} initialValues={initialValue} form={form} name="Remainder" onFinish={onFinish} layout="vertical"> 
    
   
        <Form.Item style={{marginBottom:'10px'}}
         name="vehicle_no"
         label="Vehicle No"
         rules={[
           {
             required: true,
           },
         ]}
       >
        <Select  optionFilterProp="children" showSearch ><Option>1</Option></Select>
       </Form.Item> 
    <Form.Item style={{marginBottom:'10px'}}
     name="reg.no"
     label="Reg No"
     rules={[
       {
         required: true,
       },
     ]}
   >
      <Select  optionFilterProp="children" showSearch ><Option>1</Option></Select>
   </Form.Item>
   <Form.List name={"service"}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'grid',
                  // marginBottom: 8,
                }}
                align="baseline"
              >
              <hr></hr> 
                <div style={{display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',}}>
                <Form.Item
                  {...restField}
                  label='Service Type'
                  name={[name, 'remainder_type']}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                   <Select optionFilterProp="children" showSearch  style={{width:'200px' }} 
         placeholder="Select Type"  
         allowClear
       >    <Option   value='1'>1</Option> 
         </Select> 
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'kms']}
                  label='KMS'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                <InputNumber style={{height:'38px',width:'200px'}} />
                  {/* <Input placeholder="Enter Subcategory" /> */}
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'recurring']}
                  label='Recurring'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                ><Select  optionFilterProp="children" showSearch   style={{width:'200px'}}
                placeholder="Select Recurring"  
                allowClear
              > <Option  value='Yes'>YES</Option> 
              <Option  value='No'>NO</Option>
              </Select> 
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} /></div>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()}  block icon={<PlusOutlined />}>
              Add Another Reminder 
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
   </Form> 
    </Modal>
  );
}

export {MaintenaceModal};