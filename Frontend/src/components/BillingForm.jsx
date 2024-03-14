// <<<<<<< HEAD
import {useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from 'antd';
import Swal from 'sweetalert2'
import axios from 'axios';





const BillingForm = () => {

  const location = useLocation();
  const response = location.state.response;
  const navigate = useNavigate();

  const [numberofUsers, setNumberOfUsers] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(0);

  const totalBill = numberOfMonths * numberofUsers * response.response.amount;

  const values = {
    plan:response.response.plan,
    planamount:response.response.amount,
    numberofusers : numberofUsers,
    numberofmonths : numberOfMonths
  }


  const handleKeyDown = (e) => {
    if(response.response.plan == "GOLD"){
    if (parseInt(e.target.value + e.key) > 300) {
      e.preventDefault();
    }
  }
  else{
    if (parseInt(e.target.value + e.key) > 999999) {
      e.preventDefault();
  }
  }
}
     
  const handlePurchase =  ()=>{
    Swal.fire({
        title: "Are you sure?",
        text: `Your order amount is ${totalBill}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, purchase it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          result = await axios.post("http://localhost:3000/billing", values)
          if(result.status){alert("areee bill clear ho gya partyyyyyyyyy")}
          console.log("billingresult:",result)
          Swal.fire({
            title: "Purchased!",
            text: "Your order is placed",
            icon: "success"
          });
        }
        navigate('/login');
      });
  }
   return(
   <div style={{display:'flex', justifyContent:'center',backgroundColor:'#EAEDED', height : '100vh'}}>
  <Card
    style={{
      width: '50%',
      height:'60%',
      backgroundColor : '#FDFEFE',
      marginTop : '100px'
    }}> 
    {" "}
    <h2 style={{textAlign:'center', fontFamily:'monospace'}}>Payment Form</h2>
    <div 
    style={{
      display:'flex', 
      justifyContent:'left',
       alignItems:'center',
       marginTop:'70px',
       gap:'100px',
       flexWrap:'wrap'
      }}>
    <div >
    <p style={{fontFamily:'sans-serif', fontSize:'20px'}}>
      Plan : {response.response.plan}
      </p>
    <p style={{fontFamily:'sans-serif', fontSize:'20px'}}>
      Plan Amount : {response.response.amount} </p>
   <div>
  <label style={{fontFamily:'sans-serif', fontSize:'20px'}}>
    No of Users : 
  </label>
  <input
  style={{marginLeft:'5px', marginBottom:'10px'}}
  type='number'
  placeholder='Enter number of users'
  onKeyDown={handleKeyDown}
  onChange={(e)=>setNumberOfUsers(e.target.value)}
  />
  </div> 
  <div>
  <label style={{fontFamily:'sans-serif', fontSize:'20px', marginTop:'10px'}}>
   No of Months : 
  </label>
  <input 
  style={{marginLeft:'5px'}}
  type='number'
  placeholder='Enter number ofmonths'
  onChange={(e)=>setNumberOfMonths(e.target.value)}
  />
  </div>
   </div>

    <div>
        <p style={{fontFamily:'sans-serif', fontSize:'20px'}}>Total Bill: {totalBill}</p>
        <Button style={{ backgroundColor:'#FF7F50', color:'white', width:'200px'}}  onClick={handlePurchase}>Purchase</Button>
    </div>
    </div>
  </Card>
  </div>
);
};
export default BillingForm;




// import React from 'react';
// import { useLocation, useNavigate } from "react-router-dom";
// import { Card } from "antd";
// import Swal from "sweetalert2";
// import { useState } from "react";

// const BillingForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const response = location?.state.response;
//   // console.log("uiuiui",response)
//   const [numberOfUsers, setNumberOfUsers] = useState(0);
//   const [numberOfMonths, setNumberOfMonths] = useState(0);

//   const totalBill = numberOfMonths * numberOfUsers * response.response.amount;
//   console.log("first", totalBill);

//   const handlePurchase = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: `Your order amount is ${totalBill}`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, purchase it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: "Purchased!",
//           text: "Your order is placed",
//           icon: "success",
//         });
//       }
//       navigate("/login");
//     });
//   };

//   console.log("plan:", response.response.plan);

//   const handleKeyDown = (e) => {                   // the onekey down event handler is triggred whenever a key is pressed while the input filed is 
//                                                     // focussed.  Inside the handlekeydown function, we check it the value resulting from appending the pressed key to the current value exceeds 300.
//                                                     // if it does, we prevent default behaviour input using e.preventDefault()
//     if (response.response.plan == "GOLD") {
//       if (parseInt(e.target.value + e.key) > 300) {
//         e.preventDefault();
//       }
//     }else{
//       if (parseInt(e.target.value + e.key) > 9999999999) {
//         e.preventDefault();
//     }
//   }
//   };

//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
//     >
//       <Card
//         hoverable:true
//         style={{
//           width: "40%",
//         }}
//       >
//         {" "}
//         <h2 style={{ textAlign: "center", color: "#76D7C4" }}>Payment Form</h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ margin: "100px" }}>
//             <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
//               Plan : {response.response.plan}{" "}
//             </p>
//             <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
//               Plan Amount :{response.response.amount}{" "}
//             </p>
//             <label
//               style={{ fontFamily: "cursive", fontSize: "20px" }}
//               htmlFor=""
//             >
//               No of Users
//             </label>
//             <input
//               type="number"
//               placeholder="users"
//               onKeyDown={handleKeyDown}
//               onChange={(e) => setNumberOfUsers(e.target.value)}
//             />
//             <label
//               style={{
//                 fontFamily: "cursive",
//                 fontSize: "20px",
//                 marginTop: "10px",
//               }}
//               htmlFor=""
//             >
//               No of Months
//             </label>
//             <input
//               type="text"
//               placeholder="months"
//               onChange={(e) => setNumberOfMonths(e.target.value)}
//             />
//           </div>

//           <div style={{ marginLeft: "50px", marginRight: "150px" }}>
//             <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
//               Total Bill : {totalBill}{" "}
//             </p>
//             <button onClick={handlePurchase}>Purchase</button>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };
// export default BillingForm;
// >>>>>>> 1c84802db957eacd914a8bd28291df000eecd886
