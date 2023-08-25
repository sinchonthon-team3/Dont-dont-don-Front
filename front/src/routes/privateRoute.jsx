import { Navigate } from "react-router-dom"

function PrivateRoute({ authenticated, component: Component }) {
  return authenticated ? Component : <Navigate to="/" {...alert("로그인이 필요합니다.")} />
}

export default PrivateRoute
