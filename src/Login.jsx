import { useState } from "react";
import Registro from "./Registro";
import LoginUsuario from "./LoginUsuario";
import App from "./App";

const Login = () => {
	const [estaLogueado, setEstaLogueado] = useState(false);
	const [estaRegistrado, setEstaRegistrado] = useState(true);
    const [usuario, setUsuario] = useState("");

	if (estaLogueado) {
		return <App setEstaLogueado={setEstaLogueado} usuario={usuario}/>;
	} else {
		return (
			<>
				{estaRegistrado ? (
					<LoginUsuario
						setEstaRegistrado={setEstaRegistrado}
						setEstaLogueado={setEstaLogueado}
						setUsuario={setUsuario}
					/>
				) : (
					<Registro
						setEstaRegistrado={setEstaRegistrado}
						setEstaLogueado={setEstaLogueado}
						setUsuario={setUsuario}
					/>
				)}
			</>
		);
	}
};

export default Login;
