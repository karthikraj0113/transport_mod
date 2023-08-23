import React,{useEffect} from 'react';
import { Modal, Button, Form, Select, Input, DatePicker, InputNumber,Switch   } from 'antd';  
import { Space, Table, Tag } from 'antd';
const { TextArea } = Input;  
const { confirm } = Modal;
const { RangePicker } = DatePicker; 

function VanModal({ isVisible,  handleOk, handleCancel}) {
  const [form] = Form.useForm();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Class',
      key: 'class',
      dataIndex: 'class', 
    }, 
    {
      title: 'Direction',
      key: 'direction',
      dataIndex: 'direction', 
    }, 
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      gender: 'Male',
      level: 'v',
      class: 'ACTIVE',
      direction:'2 Way'
    }, 
  ];   
const onFinish = (values) => {
  console.log(values,'values'); 
} 
  function SwitchonChange(checked) {
      console.log(`switch to ${checked}`);
    }
  return (
    <Modal destroyOnClose={true}
      style={{ top: 20 }}
      title="Students List"
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
          Close
        </Button>
        {/* <Button type="primary" htmlType="submit" form="update_studentmodal">
          Update
        </Button> */}
        ,
      </div>
    }
    > 
    <Table columns={columns} dataSource={data} />
    </Modal>
  );
}

export default VanModal;