import App from "./App"
import "./css/login.css";

const Login = ({estaLogueado}) => {
    if (estaLogueado){
         return <App />
    }
    else{
        return (<a href="" className="login"> Iniciar Sesión</a>)
    }
 
}

export default Login
