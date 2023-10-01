import { createContext } from "react";
import { ISession } from "../interface/session.interface";

export type sessionConetxtProps={
  session:ISession,
  toggleSession:(data:ISession)=>void
  search:string,
  handlechange:(e:any)=>void
}
export const sessionProvider=createContext<sessionConetxtProps>({}as sessionConetxtProps);