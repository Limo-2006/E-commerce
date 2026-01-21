import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN LOGIC
      console.log("Login with:", formData.email, formData.password);
    } else {
      // SIGNUP LOGIC
      console.log(
        "Signup with:",
        formData.name,
        formData.email,
        formData.password
      );
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login —" : "Create Account —"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="login-links">
          {isLogin ? (
            <>
              <span className="link-text">Forgot your password?</span>
              <span
                className="link-text"
                onClick={() => setIsLogin(false)}
              >
                Create account
              </span>
            </>
          ) : (
            <span
              className="link-text"
              onClick={() => setIsLogin(true)}
            >
              Already have an account? Login
            </span>
          )}
        </div>

        <button type="submit">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
