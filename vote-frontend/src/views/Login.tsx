import { useState } from "react";
import { LoginForm, iLogin } from "../components/login/LoginForm/LoginForm";

export const Login = () => {
  const [message,setMessage] = useState("")
  const logSubmit=(values:iLogin) => {
    console.log("login");
  }
  return(
    <>
    <h1>{message}</h1>
    <LoginForm logSubmit={logSubmit}/>
    </>
  )
}