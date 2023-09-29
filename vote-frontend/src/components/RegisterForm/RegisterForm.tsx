import React from "react"
import { useForm } from "react-hook-form"
import RegisterValidations from "../../validations/RegisterValidations"
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
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>
              Register
            </h1>
          </div>
          <div>
            <input 
            type="text"
            placeholder="name"
            {...register("name",RegisterValidations.name)}
             />
          </div>
          <div>
            <input 
            type="text"
            placeholder="email"
            {...register("password",RegisterValidations.password)} />
          </div>
          <div>
            <input 
            type="text"
            placeholder="password"
            {...register("password",RegisterValidations.password)}
             />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
    </>
  )
}