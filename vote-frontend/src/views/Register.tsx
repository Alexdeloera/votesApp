import { useNavigate } from "react-router-dom"
import { postRegister } from "../api/postRegister"
import { IUserRegister, RegisterForm } from "../components/RegisterForm/RegisterForm"
import { useState } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const [mesageError, setMesageError] = useState<string | null>(null)
  const onSubmit = async (values: IUserRegister) => {

    try {
      const resp = await postRegister(values)
      console.log(resp);
      alert("usuario creado con exito")
      navigate('/login');
    } catch (error) {
       setMesageError("Error al crear el usuario!")
    }
  }

  return (
    <>
    <p className="mt-16 text-red-600 text-lg">{mesageError}</p>
    <RegisterForm onSubmit={onSubmit} />
    </>
  )
}