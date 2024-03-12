import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const locationNav = useLocation();

  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = async () => {
    const body = {
      companyname: companyName.toLocaleLowerCase(),
      companyemailid: emailId,
      password: password,
      phonenumber: phoneNumber,
      location: location,
      label: label,
    };

    const response = locationNav?.state;
    console.log("uuu:", response);

    // alert(companyName.toLocaleLowerCase())
    const response1 = await axios.post("http://localhost:3000/signup", body);
    console.log("reg:", response1.data.msg);
    // alert("mera toh ho gya registration",response.msg);
    // console.log("first:", response1.response.amount);
    if (response.response.amount === 0) {
      navigate("/login");
    } else {
      navigate("/billing", { state: { response: response } });
    }
  };

  // const response = locationNav?.state.response.amount;
  // console.log("uuu:", response);

  return (
    <div>
      <div>
        <h1>RegistrationForm</h1>
      </div>
      <div>
        <h4>Company Name: </h4>
        <input
          type="text"
          id="companyname"
          placeholder="Enter your Company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div>
        <h4>Company EmailId: </h4>
        <input
          type="text"
          id="companyemailid"
          placeholder="Enter your Company emailid"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
      </div>

      <div>
        <h4>Password: </h4>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <h4>Phone Number: </h4>
        <input
          type="text"
          id="phonenumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div>
        <h4>Location: </h4>
        <input
          type="text"
          id="location"
          placeholder="Enter your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <h4>Label: </h4>
        <input
          type="text"
          id="label"
          placeholder="Enter Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div>
        <h4></h4>
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
