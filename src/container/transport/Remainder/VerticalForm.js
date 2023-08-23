import React,{useState} from 'react';
import { Form, Input, Button, Modal  } from 'antd'; 
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};
const VerticalForm = ({ isVisible, handleOk, handleCancel }) => { 
  const initialValue={
    Service_Type:[{    
      service:' '  
    }
    ]
  }
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  return (
    <Modal  destroyOnClose={true}
    style={{ top: 20 }}
    title="Create Setting"
    visible={isVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    okText="Create"
    cancelText="Cancel"
    footer={[ 
              <Button className="btn-signin" type="primary" htmlType="submit" form="dynamic_form_item" size="large">
                Save
              </Button>
    ]}
    width={500}>  
       <Form initialValues={initialValue}
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.List
        name="Service_Type"
        rules={[
          {
           required:true
          },
        ]}
      >
        {(fields, { add, remove } ) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Service' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  name={[field.name,"service"]}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input service name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="Service name"
                    style={{
                      width: '80%',
                    }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined style={{marginLeft:'10px'}}
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: '60%',
                }}
                icon={<PlusOutlined />}
              >
                Add service
              </Button>  
            </Form.Item>
          </>
        )}
      </Form.List> 
    </Form>
  </Modal> 
  );
};

export { VerticalForm };
