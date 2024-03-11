const LoginPage = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <h3>Email : </h3>
        <input type="text" placeholder="Enter your emailid" />
      </div>

      <div>
        <h3>Password : </h3>
        <input type="password" placeholder="Enter your password" />
      </div>

      <div>
        <h3></h3>
        <button type="submit"> Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
