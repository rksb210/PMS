// import React from 'react';
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const { Option } = Select;

const RegistrationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const response = location?.state;
  console.log("location", response.response.amount);

  const onFinish = async (values) => {
    const response1 = await axios.post("http://localhost:3000/signup", values);
    console.log("reg:", response1.data.msg);
    // alert("mera toh ho gya registration", response.msg);
    console.log(values);
    if (response.response.amount === 0) {
      navigate("/login");
    } else {
      navigate("/billing", { state: { response: response } });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handlelogin = () => {
    navigate("/login");
  };

  const handleKeyDown = (e) => {
    if (e.target.value.length > 15) {
      e.preventDefault();
    }
  };

  // const [companyName, setCompanyName] = useState("");
  // const [emailId, setEmailId] = useState("");
  // const [password, setPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [location, setLocation] = useState("");
  // const [label, setLabel] = useState("");

  // const handleSubmit = async () => {
  //     const body = {
  //         companyname: companyName,
  //         companyemailid: emailId,
  //         password: password,
  //         phonenumber: phoneNumber,
  //         location: location,
  //         label: label
  //     }
  //     const response = await axios.post("http://localhost:3000/signup", body);
  //     console.log("reg:", response.msg);
  //     alert("mera toh ho gya registration", response.msg);
  //     navigate("/login", { state: { response: response.data.data } })
  // };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "50%",
          // width : '40vw',
          // height : '70vh',
          // marginLeft : '350px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
          backgroundColor: "#F2F4F4",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            marginBottom: "10px",
            textAlign: "center",
            fontFamily: "fantasy",
            color: "#76D7C4",
            padding: "10px",
          }}
        >
          Registration Form
        </h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              style={{ width: "150px", marginLeft: "60px" }}
              type="primary"
              htmlType="submit"
            >
              {" "}
              Sign Up
            </Button>
            <p>already have an Account?</p>
            <button onClick={handlelogin}>Login</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default RegistrationForm;
