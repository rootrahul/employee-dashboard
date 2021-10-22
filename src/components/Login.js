import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      setMessage("");
      dispatch(
        login({
          email: email,
          password: password,
          loggedIn: false,
        })
      );
    } else {
      setMessage("**Please enter the required details");
    }
  };

  const isEmailValid = (e) => {
    e.preventDefault();
    setEmail(e.target.value);

    let em = e.target.value;

    let atPosition = em.indexOf("@");
    let dotPosition = em.lastIndexOf(".");

    if (em === "") {
      setEmailError("**Email cannot be empty");
    } else if (
      atPosition < 1 ||
      dotPosition < atPosition + 2 ||
      dotPosition + 2 >= em.length
    ) {
      setEmailError("**Please Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const isPasswordValid = (e) => {
    e.preventDefault();

    setPassword(e.target.value);
    let pass = e.target.value;
    let passLength = pass.length;

    if (passLength < 6)
      setPassError("**Password must contains at least 6 characters");
    else if (!pass.match(/[a-z]/g)) {
      setPassError("**Password must have at least 1 lowercase letter");
    } else if (!pass.match(/[0-9]/g)) {
      setPassError("**Password must have at least 1 number");
    } else if (!pass.match(/[A-Z]/g)) {
      setPassError("**Password must have at least 1 uppercase letter");
    } else {
      setPassError("");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Form</h1>
        <hr />
        <br />
        <label>
          Email ID: <input type="email" value={email} placeholder="Enter Email ID" onChange={isEmailValid} />
        </label>
        <p>{emailError}</p>
        <label>
          Password:{" "}
          <input type="password" value={password} placeholder="Enter Password" onChange={isPasswordValid} />
        </label>
        <p>{passError}</p>
        <p>{message}</p>
        <div id="btn">
          <button type="submit" id="submit__btn">
            Submit
          </button>
          <button type="reset" id="reset__btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
