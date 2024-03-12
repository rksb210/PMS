// import React from 'reac
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from 'antd';



const PricingPage = () => {

    const navigate = useNavigate();
    
    const handleFree = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:3000/free");
    // console.log("res", response);
    console.log("tttt", response.data.data);
    navigate("/signup", { state: { response: response.data.data } });
 
  };

  const handleGold = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:3000/gold");
    // console.log("res", response);
    console.log(response.data.data);
    navigate("/signup", { state: { response: response.data.data } });
  };

  const handlePlatinium = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:3000/platinum");
    // console.log("res", response);
    console.log(response.data.data);
    navigate("/signup", { state: { response: response.data.data } });
  };

  return(
   
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop : '100px', flexWrap:'wrap'}}>
  <Row gutter={16}>
    <Col span={8}>
      <Card title="FREE" bordered={false} style={{width:'100%',height:'100%',backgroundColor:'#F2F4F4'}}>
        <p> &#8377; 0 / user / month</p>
        <p>upto 5 users</p>
        <Button onClick={handleFree}>Start For Free</Button>
        <p>Projects : 3</p>
        <p>Storage : 10 GB</p>
        <p>Number of Users : 5</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="GOLD" bordered={false} style={{width:'100%',height:'100%',backgroundColor:'#F2F4F4'}}>
      <p> &#8377; 200 / user / month</p>
        <p>upto 300 users</p>
        <Button onClick={handleGold}>Buy Now</Button>
        <p>Projects : Unlimited Projects</p>
        <p>Storage : 250 GB</p>
        <p>Number of Users : 300</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="PLATINIUM" bordered={false} style={{width:'100%',height:'100%',backgroundColor:'#F2F4F4'}}>
      <p> &#8377; 300 / user / month</p>
        <p>Unlimited users</p>
        <Button onClick={handlePlatinium}>Buy Now</Button>
        <p>Projects : Unlimited Projects</p>
        <p>Storage : 400 GB</p>
        <p>Number of Users : Unlimited</p>
      </Card>
    </Col>
  </Row>
  </div>
  
  )
};
export default PricingPage;