import  "./css/cardHistorias.css"

const CardHistorias = ({usuario, historiaVista , imagenHistoria}) => {
  return (
		<div className="div__historia">
			<img
				src={imagenHistoria}
				alt="usuario"
				style={{
					boxShadow: historiaVista
						? "0 0 0 2px inset gray, 0 0 0 3px gray"
						: "0 0 0 2px inset violet, 0 0 0 3px rgb(188, 63, 251)",
				}}
			/>

			<span>{usuario}</span>
		</div>
	);
}

export default CardHistorias
