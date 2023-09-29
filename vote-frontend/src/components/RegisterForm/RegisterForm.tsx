import React from "react"
import { useForm } from "react-hook-form"
import RegisterValidations from "../../validations/RegisterValidations"
import './registerForm.css'
export interface IUserRegister{
  name:string,
  email:string,
  password:string
}
interface iFormRegisterProps {
  onSubmit: (values: IUserRegister) => void
}
export const RegisterForm :React.FC<iFormRegisterProps>= ({onSubmit}) => {
  const{register,handleSubmit ,formState:{errors}}=useForm<IUserRegister>({
    defaultValues:{
      name:'',
      email:'',
      password:''
    }
  })
  return(
    <>
    <div className="flex justify-center mt-10">
      <div className="formRegister-Conteiner_main">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="formRegister-title">
              Singn Up
            </h1>
          </div>
          <div>
            <input 
            type="text"
            placeholder="name"
            className="formRegiser-input"
            {...register("name",RegisterValidations.name)}
             />
          </div>
          <div>
            <input 
            type="text"
            placeholder="email"
            className="formRegiser-input"
            {...register("password",RegisterValidations.password)} />
          </div>
          <div>
            <input 
            type="text"
            placeholder="password"
            className="formRegiser-input"
            {...register("password",RegisterValidations.password)}
             />
          </div>
          <button type="submit" className="formRegister-button">Save</button>
        </form>
      </div>
    </div>
    </>
  )
}