import React, { useEffect, useState } from 'react'; 
import { Drawer, Button, Row, Form, Input, Select, Col, Modal, AutoComplete, Radio, Checkbox, Switch, Space } from 'antd';   
const Option = Select.Option; 
const CreateDriver = props => {
  const { handleClose, visible,  } = props;
  
  const [form] = Form.useForm(); 
  const onFinish = values => {
    console.log(values);
  }; 
  const [value1, setValue1] = useState(2);


  const _onChange1 = (e) => {
    setValue1(e.target.value);
  }; 

  return (
    <Modal
      title={
        <h1
          style={{
            color: '#5f63f2',
            margin: 'auto',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {/* <FontAwesomeIcon icon={faUsersCog} style={{ fontSize: 20, marginRight: '10px' }} /> */}
          Create Driver
        </h1>
      }
      width={600}
      onClose={handleClose}
      onCancel={handleClose}
      visible={visible}
      footer={
        <div style={{ textAlign: 'right' }}>
          <Button style={{ marginRight: '8px' }} type="default" size="large" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            key="submit"
            form="createEmp"
            style={{ marginRight: '8px' }}
            type="primary"
            size="large"
            htmlType="submit"
          >
            Create Driver
          </Button>
        </div>
      }
    >
      <Form
        id="createEmp"
        form={form}
        autoComplete="off"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      // fields = {{EmployeeNumber:no}}
      >
        <Row>
          <Col span={24}>
            <Form.Item
              label="Institute"
              name="InstituteName"
              rules={[{ required: true, message: 'Please Select Institute' }]}
            >
                 <Select size="small" defaultValue={'Everwin Vidhyashram - Kolathur'}  style={{ width: 280 }}>                
                      <Option  value='Everwin Vidhyashram - Kolathur'> Everwin Vidhyashram - Kolathur  </Option> 
                      <Option  value='Everwin Vidhyashram - Perambur'> Everwin Vidhyashram - Perambur  </Option>
                      <Option  value='Everwin Vidhyashram - Mathur'> Everwin Vidhyashram - Mathur  </Option>
                      <Option  value='Everwin Public School'> Everwin Public School  </Option>
                      <Option  value='Everwin Matriculation Higher Secondary School'> Everwin Matriculation Higher Secondary School  </Option>
                </Select>
            </Form.Item>
          </Col>
 
          <Col span={24}>
            <Form.Item
              label="Employee Number"
              name="EmployeeNumber"
              rules={[{ required: true, message: 'Please provide Employee Number' }]}
            >
              <Input disabled={true} value={'EPS828124'} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <h2>General Details</h2>
          </Col>
          <Col span={24}>
            <Form.Item label="Prefix" name="Prefix" rules={[{ required: true, message: 'Please Select Prefix' }]}>
              <Select>
                <Option value="Mr.">Mr.</Option>
                <Option value="Ms.">Ms.</Option>
                <Option value="Mrs.">Mrs.</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="First Name"
              name="FirstName"
              rules={[{ required: true, message: 'Please Enter First Name' }]}
            >
              <Input placeholder="Please Enter First Name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Last Name"
              name="LastName"
              rules={[{ required: true, message: 'Please Enter Last Name' }]}
            >
              <Input placeholder="Please Enter Last Name" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label=" Acting Driver"
              name="acting_driver"
              rules={[{ required: true, message: 'Please Select Option ' }]}
            >
              <Radio.Group onChange={_onChange1} name="radiogroup" defaultValue={value1} value={value1}>
                <Radio value={1}>YES</Radio>
                <Radio value={2}>NO</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Driving License"
              name="drivinglicense"
              rules={[{ required: true, message: 'Please Enter Driving License ' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Gender" name="Gender" rules={[{ required: true, message: 'Please Select Gender' }]}>
              <Select>
                <Option key="Male">Male</Option>
                <Option key="Female">Female</Option>
                <Option key="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="DOB" name="DOB" rules={[{ required: true, message: 'Please Select DOB' }]}>
              <Input type="date"></Input>
            </Form.Item>
          </Col>
          {value1 === 2 ? (<>
            <Col span={24}>
              <Form.Item
                label="Marital Status"
                name="MaritalStatus"
                rules={[{ required: true, message: 'Please Enter Marital Status' }]}
              >
                <Select>
                  <Option key="Married">Married</Option>
                  <Option key="Single">Single</Option>
                  <Option key="Separated">Separated</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Anniversary Date" name="AnniversaryDate">
                <Input type="date"></Input>
              </Form.Item>
            </Col>

            <Col span={24}>
              <h2>Education Qualification</h2>
            </Col>
            <Col span={24}>
              <Form.Item label="Graduate" name="Graduate" rules={[{ required: true, message: 'Please Enter Graduate' }]}>
                <Input placeholder="Please Enter Graduate" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Post Graduate"
                name="PostGraduate"
              // rules={[{ required: true, message: 'Please Enter Post Graduate' }]}
              >
                <Input placeholder="Please Enter Post Graduate" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Subject Major" name="Major" rules={[{ required: true, message: 'Please Enter Major' }]}>
                <Input placeholder="Please Enter Major" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2>Job Details</h2>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Joining Date"
                name="JoiningDate"
                rules={[{ required: true, message: 'Please Select Joining Data' }]}
              >
                <Input placeholder="Please Joining Data" type="date" />
              </Form.Item>
            </Col> 
            <Col span={24}>
              <Form.Item
                label="Department"
                name="DepartmentId"
                rules={[{ required: true, message: 'Please Select Department' }]}
              >
                <Select   mode="multiple" allowClear showSearch>                 
                  <Option value='Transport'>Transport</Option>
                </Select>
              </Form.Item>
            </Col> 
            <Col span={24}>
              <Form.Item
                label="Primary Authority"
                name="PrimaryAuthorityId"
                rules={[{ required: true, message: 'Please Select Primary Authority' }]}
              >
                <Select showSearch optionFilterProp="children" allowClear>
                <Option   value='Mrs. JANANI P P'>Mrs. JANANI P P</Option>
 
                </Select>
              </Form.Item>
            </Col>


            <Col span={24}>
              <Form.Item
                label="Secondary Authority"
                name="SecondaryAuthorityId"
                rules={[{ required: true, message: 'Please Select Secondary Authority' }]}
              >
                <Select showSearch optionFilterProp="children" allowClear>
                <Option   value='Mrs. JANANI P P'>Mrs. JANANI P P</Option> 
                </Select>
              </Form.Item>
            </Col>



            <Col span={24}>
              <Form.Item
                label="Employment Type"
                name="EmploymentType"
                rules={[{ required: true, message: 'Please Select Employment Type' }]}
              >
                <Select>
                  <Option value="Full Time">Full Time</Option>
                  <Option value="Part Time">Part Time</Option>
                  {/* <Option value="Guest Lecturer">Guest Lecturer</Option> */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2>Experience</h2>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Previous Employment"
                name="PreviousEmployeeCompanyName"
              // rules={[{ required: true, message: 'Please Enter Company Name' }]}
              >
                <Input placeholder="Please Enter Company Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Previous Employment"
                name="PreviousEmployeeExperience"
              // rules={[{ required: true, message: 'Please Enter Experience' }]}
              >
                <Input placeholder="Please Enter Experience" type="number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Total Experience"
                name="TotalExperienceExperience" 
              >
                <Input placeholder="Please Enter Experience" type="number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2>Contact Details</h2>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mobile"
                name="PersonalMobile"
                rules={[{ required: true, message: 'Please Enter Personal Mobile' }]}
              >
                <Input placeholder="Please Enter Personal Mobile" type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Alternate Mobile"
                name="PersonalAlternateMobile" 
              >
                <Input placeholder="Please Enter Personal Mobile" type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Email"
                name="PersonalEmail"
                rules={[{ required: true, message: 'Please Enter Personal Email' }]}
              >
                <Input placeholder="Please Enter Personal Email" type="email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Address Line 1"
                name="PersonalAddress1"
                rules={[{ required: true, message: 'Please Enter Personal Address Line 1' }]}
              >
                <Input placeholder="Please Enter Personal Address Line 1" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Address Line 2"
                name="PersonalAddress2" 
              >
                <Input placeholder="Please Enter Personal Address Line 2" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Landmark"
                name="PersonalLandmark"
                rules={[{ required: true, message: 'Please Enter Landmark' }]}
              >
                <Input placeholder="Please Enter Landmark" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="State" name="PersonalState" rules={[{ required: true, message: 'Please Enter State' }]}> 
                <Input placeholder="Please Enter State" />
              </Form.Item>
            </Col>


            <Col span={24}>
              <Form.Item label="City" name="PersonalCity" rules={[{ required: true, message: 'Please Enter City' }]}> 
                <Input placeholder="Please Enter City" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Area" name="PersonalArea" rules={[{ required: true, message: 'Please Enter Area' }]}>
                <Input placeholder="Please Enter Area" />
              </Form.Item>
            </Col>



            <Col span={24}>
              <Form.Item
                label="Pincode"
                name="PersonalPincode"
                rules={[{ required: true, message: 'Please Enter Pincode' }]}
              > 
                <Input placeholder="Please Enter Pincode" type="number" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <h2 style={{ paddingLeft: '100px' }}>Primary Contact</h2>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Name"
                name="FirstPersonName"
                rules={[{ required: true, message: 'Please Enter First Person Name' }]}
              >
                <Input placeholder="Please Enter First Person Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Relation"
                name="FirstPersonRelation"
                rules={[{ required: true, message: 'Please Enter First Person Relation' }]}
              >
                <Input placeholder="Please Enter First Person Relation" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mobile"
                name="FirstPersonMobile"
                rules={[{ required: true, message: 'Please Enter First Person Mobile' }]}
              >
                <Input placeholder="Please Enter First Person Mobile" type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2 style={{ paddingLeft: '100px' }}>Secondary contact</h2>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Name"
                name="SecondPersonName" 
              >
                <Input placeholder="Please Enter Second Person Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Relation"
                name="SecondPersonRelation" 
              >
                <Input placeholder="Please Enter Second Person Relation" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mobile"
                name="SecondPersonMobile" 
              >
                <Input placeholder="Please Enter Second Person Mobile" type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2>Salary Details</h2>
            </Col>
            <Col span={24}>
              <Form.Item label="CTC" name="CTC" rules={[{ required: true, message: 'Please Enter CTC' }]}>
                <Input placeholder="Please Enter CTC" id="number" type="number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2>Bank Details</h2>
            </Col>
            <Col span={24}>
              <Form.Item label="Bank Name" name="BankName" rules={[{ required: true, message: 'Please Give Bank Name' }]}>
                <Input placeholder="Please Give Bank Name" /> 
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="IFSC Number"
                name="IFSCNumber"
                rules={[{ required: true, message: 'Please Enter IFSC Number' }]}
              >
                <Input placeholder="Please Enter IFSC Number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Branch" name="Branch" rules={[{ required: true, message: 'Please Enter Branch' }]}>
                <Input placeholder="Please Enter Branch" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Account Number"
                name="AccountNumber"
                rules={[{ required: true, message: 'Please Enter Account Number' }]}
              >
                <Input placeholder="Please Enter Account Number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Holder Name"
                name="AccountName"
                rules={[{ required: true, message: 'Please Enter Holder Name' }]}
              >
                <Input placeholder="Please Enter Holder Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2>PF Details</h2>
            </Col>
            <Col span={24}>
              <Form.Item
                label="PF Activation"
                name="PFActive"
                rules={[{ required: true, message: 'Please Enter PF Number' }]}
                valuePropName="checked"
              >
                <Switch size="small" defaultChecked style={{ margin: '10px' }} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="PF Number"
                name="PFNumber"
                rules={[{ required: true, message: 'Please Enter PF Number' }]}
              >
                <Input placeholder="Please Enter PF Number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="PF Percentage"
                name="PFPercentage"
                initialValue={100}
                rules={[{ required: true, message: 'Please Enter PF Percentage' }]}
              >
                <Input placeholder="Please Enter PF Percentage" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h2>Shift Details</h2>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Shift"
                name="ShiftIds"
                rules={[{ required: true, message: 'Please Select Shift' }]}
              >
                <Select showSearch allowClear mode='multiple'>
                  <Option value='Morning Shift - 8.15am-5pm'>Morning Shift - 8.15am-5pm</Option>
                 </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Days"
                name="DaysId"
                rules={[{ required: true, message: 'Please Select Days' }]}
              >
                <Select showSearch allowClear>
                  <Option  value={'All Day'}>All Day</Option>
                </Select>
              </Form.Item>
            </Col></>) : null}

        </Row>
      </Form>
    </Modal>
  );
};

export { CreateDriver };
