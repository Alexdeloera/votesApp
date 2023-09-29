import { useForm } from "react-hook-form"
import LoginValidations from "../../../validations/LoginValidations"
import './loginForm.css'
export interface iLogin {
  email: string,
  password: string
}
interface iLogProps {
  logSubmit: (values: iLogin) => void
}
export const LoginForm:React.FC<iLogProps> = ({logSubmit}) => {
  const {register,handleSubmit,formState:{errors}} = useForm<iLogin>({
    defaultValues: {
      email: "",
      password: ""
  }})

  return(
    <>
      <div className="flex justify-center">
      <div className="loginForm-container_main">
        <form onSubmit={handleSubmit(logSubmit)}>
          <div>
            <h1 className="loginForm-title">Login</h1>
          </div>
          <div>
            <input 
            type="text" 
            placeholder="email" 
            {...register("email",LoginValidations.email)} 
            className="loginForm-input" 
            />
            {errors.email && <p className='formRegiser-mesage'>{errors.email?.message}</p>}
          </div>
          <div>
            <input 
            type="password" 
            placeholder="Password" 
            {...register("password",LoginValidations.password)} 
            className="loginForm-input" 
            />
            {errors.password && <p className='formRegiser-mesage'>{errors.password?.message}</p>}
          </div>
          <div>
            <button type="submit" className="loginForm-button">Guardar</button>
          </div>
        </form>
      </div>
    </div>
    </>

  )
}