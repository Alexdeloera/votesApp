import { IUserRegister, RegisterForm } from "../components/RegisterForm/RegisterForm"

export const Register = () => {

  const onSubmit=(values:IUserRegister)=>{
    console.log("hola");
  }
  
  return(
    <RegisterForm onSubmit={onSubmit}/>
  )
}