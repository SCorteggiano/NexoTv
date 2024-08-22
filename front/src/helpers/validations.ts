import { ILoginValidate, IRegisterValidate } from "@/interfaces";

export const validateLogin = (loginValues: ILoginValidate) => {
  let errors = {};

  // Email
  if (!loginValues.email) {
    errors = { ...errors, email: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(loginValues.email)) {
    errors = { ...errors, email: "Email is invalid" };
  }

  // Password
  if (!loginValues.password) {
    errors = { ...errors, password: "Password is required" };
  } else {
    if (loginValues.password.length < 8) {
      errors = {
        ...errors,
        password: "Password must be at least 8 characters long",
      };
    } else if (!/[A-Z]/.test(loginValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one uppercase letter",
      };
    } else if (!/[0-9]/.test(loginValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one number",
      };
    }
  }

  return errors;
};

export const validateRegister = (registerValues: IRegisterValidate) => {
  let errors = {};

  // Email
  if (!registerValues.email) {
    errors = { ...errors, email: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(registerValues.email)) {
    errors = { ...errors, email: "Email is invalid" };
  }

  // Password
  if (!registerValues.password) {
    errors = { ...errors, password: "Password is required" };
  } else {
    if (registerValues.password.length < 8) {
      errors = {
        ...errors,
        password: "Password must be at least 8 characters long",
      };
    } else if (!/[A-Z]/.test(registerValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one uppercase letter",
      };
    } else if (!/[0-9]/.test(registerValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one number",
      };
    }
  }

  // Names
  if (!registerValues.first_name) {
    errors = { ...errors, first_name: "First name is required" };
  } else if (!/^[A-Za-z]+$/.test(registerValues.first_name)) {
    errors = { ...errors, first_name: "First name is invalid" };
  }

  if (!registerValues.last_name) {
    errors = { ...errors, last_name: "Last name is required" };
  } else if (!/^[A-Za-z]+$/.test(registerValues.last_name)) {
    errors = { ...errors, last_name: "Last name is invalid" };
  }

  return errors;
};
