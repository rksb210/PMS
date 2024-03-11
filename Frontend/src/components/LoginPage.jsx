import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [loginEmailId, setLoginEmailId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleClick = async () => {
    var body = { loginemailid: loginEmailId, loginpassword: loginPassword };
    const response = await axios.post("http://localhost:3000/login", body);
    console.log("first:", response.data.message);
    alert(response.data.message);
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <h3>Email : </h3>
        <input
          type="text"
          placeholder="Enter your emailid"
          value={loginEmailId}
          onChange={(event) => setLoginEmailId(event.target.value)}
        />
      </div>

      <div>
        <h3>Password : </h3>
        <input
          type="password"
          placeholder="Enter your password"
          value={loginPassword}
          onChange={(event) => setLoginPassword(event.target.value)}
        />
      </div>

      <div>
        <h3></h3>
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
