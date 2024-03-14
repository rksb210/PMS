// import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, Input } from 'antd';
import Swal from 'sweetalert2';




const LoginPage = () => {

  const navigate = useNavigate();

const onFinish = async(values) => {
  try {
    const result = await axios.post("http://localhost:3000/login", values);
    console.log("rrrrr:",result)
    // alert(result.message)
    if(!result.data.status){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${result.data.message}`,
      });
    }
    else{
      navigate('/pricing')
    }
  console.log('Success:', values);
  } catch (error) {
    console.log("error while calling the login api", error) 
  }
  
};



const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const handleSignup = ()=>{
  navigate('/signup')
}
  

  return(
    <div style={{display:'flex', justifyContent:'center',backgroundColor:'#EAEDED', height:'100vh'}}>
    <div
    style={{display:'flex', flexDirection:'column', alignItems:"center",
    justifyContent:"center",
    marginTop : '100px',
    backgroundColor : '#FDFEFE',
    borderRadius:'20px',
    height:'50%',
    width:'40%'}}>
       <h2 style={{marginBottom:'10px', textAlign:"center", fontFamily:'monospace',padding:'10px'}}>Login Form</h2>
  <Form
    name="basic"
    labelCol={{
      span: 6,
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
      name="companyemailid"
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
      placeholder='Enter your registered email id'
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
      <Input.Password
      placeholder='Enter your password'/>
    </Form.Item>
     <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <div>
      <Button style={{ backgroundColor:'#3498DB', color:'white', width:'150px'}}   htmlType="submit">
        Login
      </Button>
      </div>
   
    <div >
      <span>Do not have an Account?
      <Button type='secondary' style={{ color: '#2E86C1'}}  onClick={handleSignup}>Sign Up</Button>
      </span>
    </div>
    </div>
  </Form>
  </div>
  </div>

  );
};
export default LoginPage;