// import React from 'react';

import axios from "axios";
import { Button, Form, Input } from 'antd';
// import Password from 'antd/es/input/Password';



const LoginPage = () => {


const onFinish = async(values) => {
  const response = await axios.post("http://localhost:3000/login", values);
  console.log('Success:', values);
  console.log('SuccessResponse:', response);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  

  return(
    <div style={{display:'flex', justifyContent:'center'}}>
    <div
    style={{display:'flex', flexDirection:'column', alignItems:"center",
    justifyContent:"center",
    marginTop : '100px',
    backgroundColor : '#F2F4F4',
    borderRadius:'20px',
    width:'40%'}}>
       <h2 style={{marginBottom:'10px', textAlign:"center", fontFamily:'fantasy', color:'#76D7C4',padding:'10px'}}>Login Form</h2>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      width: '100%',
      padding:'30px'
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="EmailId"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your E-mail!',
        },
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
      }
      ]}
    >
      <Input
      id="emailid"
      />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
        {
          min : 5,
          message : 'For Strong passwrod, it should have minimum 5 characters'
      },
      {
          max : 15,
          message : 'Password should not be greater than 15 charcaters'
      }
      ]}
    >
      <Input.Password/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button style={{width:'150px', marginLeft:'60px'}} type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
  );
};
export default LoginPage;