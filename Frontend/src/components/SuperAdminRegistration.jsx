// import React from 'react';
import { Button, Form, Input, } from 'antd';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const SuperAdminRegistration= () => {
    const navigate = useNavigate();
    // const location = useLocation();
    // const response = location.state.response;

   
    const handleKeyDown = (e) => {
        // Prevent input if the length of the value would exceed 10 digits
        if (e.target.value.length > 15) {
            e.preventDefault();
        }
    };



    const onFinish = async (values) => {

        try {
            const result = await axios.post("http://localhost:3000/superadminsignup", values);

        if (result.data.status) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${result.data.msg}`
            });
        }
        else {
           
             navigate('/superadminlogin')
        
        }
            
        } catch (error) {
            console.log("error while calling the admin signup api", error) 
        }
    }
        
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handlelogin = () => {
        navigate('/superadminlogin')
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: ' #EAEDED ', height: '100vh',}}>
            <div style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: '100px',
                backgroundColor: '#FDFEFE',
                borderRadius: '20px',
                height:'60%'
            }}>
                <h2 style={{ marginBottom: '10px', textAlign: "center", fontFamily: 'monospace', padding: '10px' }}>Super Admin Registration </h2>
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        padding: '30px',
                        width: "100%",
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item

                        label="Name"
                        name="name"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your Company Name!',
                            },
                            {
                                min: 3,
                                message: 'Company Name should be atleast of 3 characters'
                            },
                            {
                                max: 30,
                                message: 'Company Name can not be be longer than 30 characters'
                            }
                        ]}
                    >
                        <Input
                            id="name"
                            placeholder='Enter your Name'

                        />

                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="EmailId"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input
                            id="email"
                            placeholder='Enter your email id'

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
                                min: 5,
                                message: 'For Strong passwrod, it should have minimum 5 characters'
                            },
                            {
                                max: 15,
                                message: 'Password should not be greater than 15 charcaters'
                            }
                        ]}
                    >
                        <Input.Password
                            id="password"
                            placeholder='Enter your password'

                        />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },

                            {
                                pattern: /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/,
                                message: 'invalid Phone number'
                            }
                        ]}
                    >
                        <Input
                            id="phone"
                            placeholder='Enter your phone number'
                            onKeyDown={handleKeyDown}
                            maxLength={15}
                            type="tel"
                        />
                    </Form.Item>
                    

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <Button style={{ backgroundColor: '#3498DB', color: 'white', width: '200px' }} htmlType="submit">
                                {" "}
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <span>Already have an account?
                                <Button type='secondary' style={{ color: '#2E86C1' }} onClick={handlelogin}>Login</Button>
                            </span>
                        </div>
                    </div>
                </Form>
            </div>
        </div>

    );
};
export default SuperAdminRegistration;