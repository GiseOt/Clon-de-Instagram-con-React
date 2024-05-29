import "./css/login.css";

const LoginUsuario = ({ setEstaRegistrado }) => {
	return (
		<div className="login__div">
			<p className="registro__leyenda">Ya tienes cuenta?</p>
			<span
				className="span__registro__link"
				onClick={() => setEstaRegistrado(false)}
			>
				Inicia Sesión
			</span>
		</div>
	);
};

export default LoginUsuario;
