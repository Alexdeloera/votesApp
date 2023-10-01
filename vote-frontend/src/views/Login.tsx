import { useContext } from "react";
import { LoginForm, iLogin } from "../components/login/LoginForm/LoginForm";
import { getLogin } from "../api/getlogin";
import { sessionProvider } from "../context/SessionContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { toggleSession } = useContext(sessionProvider)

  const navigate = useNavigate();

  const logSubmit = async (values: iLogin) => {
    try {
      const resp = await getLogin(values);
      toggleSession(resp);
      navigate('/dashboard')
    } catch (error) {
      console.error(error);
    }
  }

  return <LoginForm logSubmit={logSubmit} />
}