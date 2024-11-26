import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { loginTest } from "./reducer/loginSlicer";

function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/register");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let formErrors = {};
      if (!value.email.trim()) {
        formErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(value.email)) {
        formErrors.email = "Email address is invalid.";
      }
      if (!value.password.trim()) {
        formErrors.password = "Password is required.";
      } else if (value.password.length < 6) {
        formErrors.password = "Password must be at least 6 characters.";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value.password)) {
        formErrors.password =
          "Password must include at least one uppercase letter, one lowercase letter, and one number.";
      }
    debugger;
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = (e) => {
    console.log(value, "............value");
    e.preventDefault();
    if (validate()) {
      dispatch(loginTest(value));
      console.log("Form submitted successfully", value);
    }
  };
console.log(errors,"....errors")
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <form onSubmit={handleSubmit} className="register-form shadow-lg">
        <div>
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
            {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
      
        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary "
          style={{ margin: "4px" }}
        >
          Submit
        </button>

        <p style={{ margin: "3px" }}>Don't have an Account?</p>
        <button
          style={{ margin: "4px" }}
          type="submit"
          className="btn btn-secondary"
          onClick={clickHandler}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
