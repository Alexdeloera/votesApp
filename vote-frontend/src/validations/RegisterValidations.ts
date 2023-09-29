import { REGEX_EMAIL } from "../constant/regex"
export default {
  name:{ required: { value: true, message: 'this field is required' } },
  email:{ 
  required: { value: true, message: 'this field is required' }, 
  pattern: {value: REGEX_EMAIL,message:'this formar is incorrect (example@example.com)'} 
  },
  password:{ 
  required: { value: true, message: 'this field is required' },
  minLength:{value:8 ,message:'this field need 8 caracters minimum'} }
  
}