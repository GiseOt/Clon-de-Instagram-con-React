import { useState } from "react";
import UsuarioFeed from "./UsuarioFeed";
import "./css/cardFeed.css";

const CardFeed = ({
	imagenFeed,
	meGusta,
	usuarioFeed,
	tiempoPublicado,
	imagenUsuario,
	comentarioPost,
	historiaVista,
}) => {
	const [liked, setLiked] = useState(false);
	const [cantidadLikes, setCantidadLikes] = useState(meGusta);

	const toggleLike = () => {
		setLiked(!liked);
		if (!liked) {
			setCantidadLikes(cantidadLikes + 1);
		} else {
			setCantidadLikes(cantidadLikes - 1);
		}
	};

	return (
		<div className="card__feed">
			<UsuarioFeed
				imagenUsuario={imagenUsuario}
				usuarioFeed={usuarioFeed}
				tiempoPublicado={tiempoPublicado}
				historiaVista={historiaVista}
			/>

			<img src={imagenFeed} alt="" className="feed__imagen" />
			<div className="feed__reacciones">
				<div className="iconos__div">
					<i
						className={`fa ${liked ? "fa-solid" : "fa-regular"} fa-heart`}
						style={{ color: liked ? "red" : "black", cursor: "pointer" }}
						onClick={toggleLike}
					></i>
					<i className="fa-regular fa-comment"></i>
					<i className="fa-regular fa-paper-plane"></i>
				</div>
				<i className="fa-regular fa-bookmark"></i>
			</div>
			<div className="recuentos__meGusta">
				<span className="meGusta__cuenta">{cantidadLikes}</span>
				<span>{cantidadLikes === 1 ? " Me gusta" : " Me gustas"}</span>
			</div>

			<p>
				<span className="usuario__bold">{usuarioFeed}</span> {comentarioPost}
			</p>
		</div>
	);
};

export default CardFeed;

