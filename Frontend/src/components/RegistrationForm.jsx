// import React from 'react';
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const { Option } = Select;

const RegistrationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const response = location?.state;
  console.log("amount:", response?.response?.amount);

  const handleKeyDown = (e) => {
    // Prevent input if the length of the value would exceed 10 digits
    if (e.target.value.length > 15) {
      e.preventDefault();
    }
  }
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values) => {
    try {
      const result = await axios.post("http://localhost:3000/signup", values);

      if (result.data.status) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${result.data.msg}`,
        });
      } else {
        if (response?.response?.amount === 0) {
          navigate("/login");
        } else {
          navigate("/billing", { state: { response: response } });
        }
      }
    } catch (error) {
      console.log("error while calling the signup api", error);
    }
  };



  const handlelogin = () => {
    navigate("/login");
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: " #EAEDED ",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          backgroundColor: "#FDFEFE",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            marginBottom: "10px",
            textAlign: "center",
            fontFamily: "monospace",
            padding: "10px",
          }}
        >
          Registration Form
        </h2>
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            padding: "30px",
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
            label="CompanyName"
            name="companyname"
            rules={[
              {
                required: true,
                message: "Please input your Company Name!",
              },
              {
                min: 3,
                message: "Company Name should be atleast of 3 characters",
              },
              {
                max: 30,
                message: "Company Name can not be be longer than 30 characters",
              },
            ]}
          >
            <Input
              id="companyname"
              // value={companyName}
              // onChange={(e)=> setCompanyName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="companyemailid"
            label="EmailId"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              id="emailid"
              // value={emailId}
              // onChange={(e)=> setEmailId(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 5,
                message:
                  "For Strong passwrod, it should have minimum 5 characters",
              },
              {
                max: 15,
                message: "Password should not be greater than 15 charcaters",
              },
            ]}
          >
            <Input.Password
              id="password"
              // value={password}
              // onChange={(e)=> setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="phonenumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
              {
                pattern: /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/,
                message: "invalid Phone number",
              },
            ]}
          >
            <Input
              id="phone"
              // value={phoneNumber}
              // onChange={(e)=> setPhoneNumber(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={15}
              type="tel"
            />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[
              {
                required: true,
                message: "Please select Location!",
              },
            ]}
          >
            <Select
              placeholder="select your Location"
              id="location"
              //  value={location}
              //  onChange={(e)=> setLocation(e.target.value)}
            >
              <Option value="India">India</Option>
              <Option value="Foreign">Foreign</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="label"
            label="Label"
            rules={[
              {
                required: true,
                message: "Please select label!",
              },
            ]}
          >
            <Select
              placeholder="select your label"
              id="label"
              //  value={label}
              //  onChange={(e)=> setLabel(e.target.value)}
            >
              <Option value="L1">L1(Zone,Circle,Division)</Option>
              <Option value="L2">L2(State,District,City)</Option>
              <Option value="L3">L3(Country,County,District)</Option>
            </Select>
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
          }

export default RegistrationForm;

