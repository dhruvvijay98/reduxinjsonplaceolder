import React, { useState } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { signUp } from "./reducer/signUpSlicer";


function Register() {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    number:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const [errors,setErrors]=useState({});

  const handlerChange = (e)=>{
    const{name,value}=e.target;
    setFormData((prev)=>({
      ...prev,[name]:value,
    }));
  };

  const validate= ()=>{
    let formErrors = {};

    if(!formData.firstName.trim()){
      formErrors.firstName = "First Name is required.";
    }else if(formData.firstName.length<2){
      formErrors.firstName= "First name must ave atleast 2 characters"
    } 
  
    if(!formData.lastName.trim()){
      formErrors.lastName = "Last Name is required.";
    }else if(formData.lastName.length<2){
      formErrors.lastName= "Last name must ave atleast 2 characters"
    } 
    if (!formData.number.trim()) {
      formErrors.number = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.number)) {
      formErrors.number = "Phone number must be at least 10 digits and contain only numbers.";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid.";
    }
    if (!formData.password.trim()) {
      formErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      formErrors.password =
        "Password must include at least one uppercase letter, one lowercase letter, and one number.";
    }
    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = "Confirm Password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(validate()){
        dispatch(signUp(formData))
        console.log("Form submitted successfully",formData);
      }
    };


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <form onSubmit={handleSubmit} className="register-form shadow-lg">
        <div>
          <label className="form-label">First Name</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            id="exampleName"
            aria-describedby="emailHelp"
            name="firstName"
            value={formData.firstname}
            onChange={handlerChange}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
           )}
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            name="lastName"
            value={formData.lastname}
            onChange={handlerChange}
          />
           {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
           )}
        </div>
        <div>
          <label className="form-label">Contact Number</label>
          <input
            type="number"
            className={`form-control ${errors.number ? "is-invalid" : ""}`}
            name="number"
            value={formData.number}
            onChange={handlerChange}
          />
          {errors.number && (
            <div className="invalid-feedback">{errors.number}</div>
          )}
        </div>
        <div>
          <label className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={formData.email}
            onChange={handlerChange}
          />
           {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handlerChange}
          />
           {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <div>
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
            id="exampleInputPassword1"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handlerChange}
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>
        <button className="btn btn-primary me-2" style={{ margin: "4px" }}>
          Submit
        </button>
        <button
          type="cancel"
          className="btn btn-secondary"
          style={{ margin: "4px" }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Register;
