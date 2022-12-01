import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    margin-bottom: 60px;
  }
  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }
  .label {
    color: ${props => props.theme.grayDark};
    font-weight: 600;
    cursor: pointer;
  }
  .input {
    width: 100%;
    padding: 20px;
    background-color: ${props => props.theme.grayLight};
    border-radius: 8px;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: white;
    border-color: ${props => props.theme.primary};;
  }
  .form {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="react-blog" className="logo" />
        <h1 className="heading">React Blog</h1>
        <form action="" className="form">
          <div className="field">
            <label htmlFor="fullName" className="label">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter full name"
              className="input"
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
