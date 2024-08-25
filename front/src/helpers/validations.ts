import { ILoginValidate, IRegisterValidate } from "@/interfaces";

export const validateLogin = (loginValues: ILoginValidate) => {
  let errors: { [key: string]: string } = {};

  if (!loginValues.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(loginValues.email)) {
    errors.email = "Email is invalid";
  }

  if (!loginValues.password) {
    errors.password = "Password is required";
  } else if (loginValues.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(loginValues.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[0-9]/.test(loginValues.password)) {
    errors.password = "Password must contain at least one number";
  }

  return errors;
};

export const validateRegister = (registerValues: IRegisterValidate) => {
  let errors: { [key: string]: string } = {};

  if (!registerValues.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(registerValues.email)) {
    errors.email = "Email is invalid";
  }

  if (!registerValues.password) {
    errors.password = "Password is required";
  } else if (registerValues.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(registerValues.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[0-9]/.test(registerValues.password)) {
    errors.password = "Password must contain at least one number";
  }

  if (!registerValues.firstName) {
    errors.firstName = "First name is required";
  } else if (!/^[A-Za-z]+$/.test(registerValues.firstName)) {
    errors.firstName = "First name is invalid";
  }

  if (!registerValues.lastName) {
    errors.lastName = "Last name is required";
  } else if (!/^[A-Za-z]+$/.test(registerValues.lastName)) {
    errors.lastName = "Last name is invalid";
  }

  return errors;
};
