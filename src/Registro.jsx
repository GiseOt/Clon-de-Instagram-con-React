import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./css/registro.css";

const Registro = ({ setEstaRegistrado, setEstaLogueado, setUsuario }) => {
	const [nombreUsuario, setNombreUsuario] = useState("");
	const [contraseña, setContraseña] = useState("");
	const [tipoContraseña, setTipoContraseña] = useState("password");

	const envioFormulario = (e) => {
		e.preventDefault();
		if (!nombreUsuario || !contraseña) {
			alert("Debes completar todos los campos.");
			return;
		}
		const datos = {
			usuario: nombreUsuario,
			contraseña: contraseña,
		};
		console.log(datos);
		setUsuario(nombreUsuario);
		setEstaLogueado(true);
	};

	return (
		<div className="registro__div">
			<h2>Instagram</h2>
			<form className="registro_form" onSubmit={envioFormulario}>
				<div className="formulario_div__sesion">
					<label htmlFor="nombre">Usuario</label>
					<input
						type="text"
						placeholder="Ej. MariaPerez"
						id="nombre"
						value={nombreUsuario}
						onChange={(e) => setNombreUsuario(e.target.value)}
					/>
				</div>
				<div className="formulario_div__sesion">
					<label htmlFor="contraseña">Contraseña</label>
					<input
						type={tipoContraseña}
						id="contraseña"
						value={contraseña}
						onChange={(e) => setContraseña(e.target.value)}
					/>
					<span
						className="vista__contraseña"
						onClick={() =>
							setTipoContraseña(
								tipoContraseña === "password" ? "text" : "password"
							)
						}
					>
						{tipoContraseña === "password" ? <FaEye /> : <FaEyeSlash />}
					</span>
				</div>
				<input type="submit" value="Iniciar Sesión" className="input__sesion" />
			</form>
			<div className="registrate__div">
				<p className="registro__leyenda">¿Aún no tienes cuenta?</p>
				<span
					className="span__registro__link"
					onClick={() => setEstaRegistrado(true)}
				>
					Regístrate
				</span>
			</div>
		</div>
	);
};

export default Registro;
