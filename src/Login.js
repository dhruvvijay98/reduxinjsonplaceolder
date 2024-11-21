import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/register");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div className="register-form shadow-lg">
        <div>
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="btn btn-primary "  style={{margin:"4px"}}>
          Submit
        </button>
       
        <p style={{margin:"3px"}}>Don't have an Account?</p>
        <button
          style={{margin:"4px"}}
          type="submit"
          className="btn btn-secondary"
          onClick={clickHandler}
        >
          Sign Up
        </button>
       
      </div>
    </div>
  );
}

export default Login;
