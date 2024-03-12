// import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";
import Swal from "sweetalert2";
import { useState } from "react";

const BillingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const response = location?.state.response;
  // console.log("uiuiui",response)
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(0);

  const totalBill = numberOfMonths * numberOfUsers * response.response.amount;
  console.log("first", totalBill);

  const handlePurchase = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Your order amount is ${totalBill}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, purchase it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Purchased!",
          text: "Your order is placed",
          icon: "success",
        });
      }
      navigate("/login");
    });
  };

  console.log("plan:", response.response.plan);

  const handleKeyDown = (e) => {                   // the onekey down event handler is triggred whenever a key is pressed while the input filed is 
                                                    // focussed.  Inside the handlekeydown function, we check it the value resulting from appending the pressed key to the current value exceeds 300.
                                                    // if it does, we prevent default behaviour input using e.preventDefault()
    if (response.response.plan == "GOLD") {
      if (parseInt(e.target.value + e.key) > 300) {
        e.preventDefault();
      }
    }else{
      if (parseInt(e.target.value + e.key) > 9999999999) {
        e.preventDefault();
    }
  }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <Card
        hoverable:true
        style={{
          width: "40%",
        }}
      >
        {" "}
        <h2 style={{ textAlign: "center", color: "#76D7C4" }}>Payment Form</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "100px" }}>
            <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
              Plan : {response.response.plan}{" "}
            </p>
            <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
              Plan Amount :{response.response.amount}{" "}
            </p>
            <label
              style={{ fontFamily: "cursive", fontSize: "20px" }}
              htmlFor=""
            >
              No of Users
            </label>
            <input
              type="number"
              placeholder="users"
              onKeyDown={handleKeyDown}
              onChange={(e) => setNumberOfUsers(e.target.value)}
            />
            <label
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                marginTop: "10px",
              }}
              htmlFor=""
            >
              No of Months
            </label>
            <input
              type="text"
              placeholder="months"
              onChange={(e) => setNumberOfMonths(e.target.value)}
            />
          </div>

          <div style={{ marginLeft: "50px", marginRight: "150px" }}>
            <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
              Total Bill : {totalBill}{" "}
            </p>
            <button onClick={handlePurchase}>Purchase</button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default BillingForm;
