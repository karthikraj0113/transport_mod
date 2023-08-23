import React, { useEffect, useState } from 'react';
import { Modal, Button, Row, Col, Select, Input, DatePicker, Space, InputNumber, Upload, message, Form } from 'antd';
import { UploadOutlined, PlusOutlined, MinusCircleOutlined, InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};
const onFinish = values => {
  console.log('Received values of form: ', values);
};
function Uploadroutes({ isVisible, handleOk, handleCancel }) {
  let [record, setRecord] = useState({
    organization_id: null,
    date: null,
    particulars: null,
    expenses_Type: null,
    amount: null,
  });

  return (
    <Modal
      destroyOnClose={true}
      style={{ top: 20 }}
      title="Upload Routes"
      visible={isVisible}
      // onOk={handleOk}
      onCancel={handleCancel}
      okText="Create"
      cancelText="Cancel"
      footer={[
        <Button type="primary" htmlType="submit" form="reminder">
          submit
        </Button>,
      ]}
      width={800}
    >
      <Form name="reminder" {...formItemLayout} onFinish={onFinish}>
        <Form.Item label="Upload">
          <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
          <h2>How to upload</h2>
          <p>1. Try dropping or by clicking to select files to upload.</p>
          <p>2. vehicle and serviceTask are mandatory.</p>
          <p>3. All dates should be in the format of DD/MM/YY, hh:mm:ss.</p>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Uploadroutes;
