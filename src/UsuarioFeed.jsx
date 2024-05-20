const UsuarioFeed = ({ imagenUsuario, usuarioFeed, tiempoPublicado , historiaVista }) => {
	return (
		<div className="div__feed">
			<img
				src={imagenUsuario}
				alt="usuario"
				style={{
					boxShadow: historiaVista
						? "0 0 0 2px inset gray, 0 0 0 3px gray"
						: "0 0 0 2px inset violet, 0 0 0 3px rgb(188, 63, 251)",
				}}
			/>
			<span>{usuarioFeed}</span>
			<span className="tiempoPublicado">•{tiempoPublicado}</span>
		</div>
	);
};

export default UsuarioFeed;
