import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Button } from "../components/button";
import { Field } from "../components/field";
import { Input, InputPassword } from "../components/input";
import { Label } from "../components/label";
import { auth, db } from "../firebase/firebase-config";
import AuthenticationPage from "./AuthenticationPage";

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
  const navigate = useNavigate();
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

  const handleSignUp = async (values) => {
    if (!values) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullName,
    });
    const collectionRef = collection(db, "users");
    await addDoc(collectionRef, {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully!");
    navigate("/");
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
    <AuthenticationPage>
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
        <InputPassword control={control} />
        <div className="have-account">
          You already have an account? <NavLink to={"/sign-in"}>Login</NavLink>{" "}
        </div>
        <Button
          type={"submit"}
          style={{
            maxWidth: 300,
            margin: "0 auto",
          }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
