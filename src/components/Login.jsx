import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  return (
    <FormStyle>
      <main>
        <div className="form-div">
          <form className="form" onSubmit={(event) => handleSubmit(event)}>
            <article style={{ marginTop: "20px" }}>
              <h2 style={{ color: "#121212" }}>Login</h2>

              <hr style={{ marginTop: "10px" }} />
            </article>
            {/* email */}
            <section className="form-section">
              <div className="form-row">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  autoComplete="email"
                  className="form-input"
                />
              </div>
              {/* email */}
              <div className="form-row">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  id="password"
                  name="password"
                  placeholder="password"
                  autoComplete="password"
                />
              </div>

              <button type="submit" className="btn btn-block">
                Login
              </button>
            </section>
          </form>
        </div>

        <ToastContainer />
      </main>
    </FormStyle>
  );
}

export default Login;

const FormStyle = styled.section`
  form {
    width: 450px;
    height: 405px;
    background: #ffffff;
    position: relative;
    top: 100px;
    margin: auto;
    padding: 30px 60px;
    border-radius: 10px;
  }

  .btn {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: #be23b1;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
  }

  .btn:hover {
    background-color: #e0b651;
  }

  .form-input {
    width: 33vw;
    padding: 0.575rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid #e2e8f0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  .form-section {
    margin-top: 30px;
  }
  .form-label {
    color: #121212;
    letter-spacing: 0.002em;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    margin-left: 1px;
    margin: 5px;
  }
`;
