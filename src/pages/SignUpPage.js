import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import * as Yup from "yup";
import { Button } from "../components/button";
import { Field } from "../components/field";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Input } from "../components/input";
import { Label } from "../components/label";

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
  .form {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const schema = Yup.object({
  fullName: Yup.string().required("Please enter your fullName"),
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSignUp = (values) => {
    if (!values) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  }, []);

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="react-blog" className="logo" />
        <h1 className="heading">React Blog</h1>
        <form action="" className="form" onSubmit={handleSubmit(handleSignUp)}>
          <Field>
            <Label htmlFor="fullName" className="label">
              Full name
            </Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter full name"
              className="input"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="email" className="label">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="input"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="password" className="label">
              Password
            </Label>
            <Input
              type={isShowPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              className="input"
              control={control}
            >
              {isShowPassword ? (
                <IconEyeOpen onClick={() => setIsShowPassword(false)} />
              ) : (
                <IconEyeClose onClick={() => setIsShowPassword(true)} />
              )}
            </Input>
          </Field>
          <Button
            type={"submit"}
            style={{
              maxWidth: 300,
              margin: "0 auto",
            }}
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
