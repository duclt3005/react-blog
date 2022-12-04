import React, { useState } from "react";
import { Field } from "../field";
import { IconEyeClose, IconEyeOpen } from "../icon";
import { Label } from "../label";
import Input from "./Input";

const InputPassword = ({ control }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  if (!control) return null;

  return (
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
  );
};

export default InputPassword;
