import { useContext } from "react"
import { sessionProvider } from "../context/SessionContext"
import { Navigate, Outlet } from "react-router-dom"
export const ProtectedRoutes = () => {
  const { session } = useContext(sessionProvider);
  const redirectPath = '/login';
  if (session.token !== '') {
    console.log(session);
    return <Outlet />
  } else {
    console.log(session);
    return <Navigate to={redirectPath} replace />
  }
}
