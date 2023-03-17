import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid ");
    } else {
      window.alert("valid ");

      Navigate("/");
    }
  };

  return (
    <>
      <section className="signin" style={{ backgroundColor: "#94bbe9" }}>
        <div className="container mt-0" style={{ backgroundColor: "#94bbe9" }}>
          <div className="signin-content">
            <div className="signin-form">
              <h2 className="form-title">
                Login
                <p>
                  {" "}
                  <i class="zmdi zmdi-sign-in"></i>
                </p>
              </h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="your number "
                  />
                </div>
                <div className="form-group form-button">
                  <Link to="/signup">
                    <input
                      type="button"
                      name="signup"
                      className="form-submit"
                      value="Submit"
                      onClick={loginUser}
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
