import React from "react"
import { useForm } from "react-hook-form"
import RegisterValidations from "../../validations/RegisterValidations"
import './registerForm.css'
export interface IUserRegister {
  name: string,
  email: string,
  password: string
}

interface iFormRegisterProps {
  onSubmit: (values: IUserRegister) => void
}

export const RegisterForm: React.FC<iFormRegisterProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUserRegister>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="formRegister-Conteiner_main">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className="formRegister-title">
                Sign Up
              </h1>
            </div>
            <div className="Register-container_imput">
              <input
                type="text"
                placeholder="name"
                className="formRegiser-input"
                {...register("name", RegisterValidations.name)}
              />
              {errors.name && <p className='formRegiser-mesage'>{errors.name?.message}</p>}
            </div>
            <div className="Register-container_imput">
              <input
                type="text"
                placeholder="email"
                className="formRegiser-input"
                {...register("email", RegisterValidations.email)}
              />
              {errors.email && <p className='formRegiser-mesage'>{errors.email?.message}</p>}
            </div>
            <div className="Register-container_imput">
              <input
                type="password"
                placeholder="password"
                className="formRegiser-input"
                {...register("password", RegisterValidations.password)}
              />
              {errors.password && <p className='formRegiser-mesage'>{errors.password?.message}</p>}
            </div>
            <button type="submit" className="formRegister-button">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}