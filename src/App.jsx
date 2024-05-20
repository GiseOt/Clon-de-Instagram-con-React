import CardHistorias from "./CardHistorias";
import Historias from "./Historias";
import CardFeed from "./CardFeed";

//Css
import "./App.css";

//Imagen de las Cards de Historia
import historia1 from "./assets/h-1.jpg";
import historia2 from "./assets/h-2.jpg";
import historia3 from "./assets/h-3.jpg";
import historia4 from "./assets/h-4.jpg";
import historia5 from "./assets/h-5.jpg";
import historia6 from "./assets/h-6.jpg";
import historia7 from "./assets/h-7.jpg";
import feed1 from "./assets/feed1.jpg";
import feed2 from "./assets/feed2.jpg";
import feed3 from "./assets/feed3.jpg";
import feed4 from "./assets/feed4.jpg";
import feed5 from "./assets/feed5.jpg";

function App() {
	return (
		<>
			<Historias>
				<CardHistorias usuario="Yayita_lp" imagenHistoria={historia1} />
				<CardHistorias usuario="Maria84" imagenHistoria={historia2} />
				<CardHistorias usuario="Jey.photos" imagenHistoria={historia3} />
				<CardHistorias usuario="Sanamente_R" imagenHistoria={historia4} />
				<CardHistorias usuario="CiraOk" imagenHistoria={historia5} />
				<CardHistorias
					usuario="Pablo_Diaz"
					imagenHistoria={historia6}
					historiaVista={true}
				/>
				<CardHistorias
					usuario="Colo.08"
					imagenHistoria={historia7}
					historiaVista={true}
				/>
			</Historias>
			<div className="div__cardFeed">
				<CardFeed
					imagenFeed={feed1}
					usuarioFeed="Sanamente_R"
					meGusta={1}
					imagenUsuario={historia4}
					tiempoPublicado="34 min"
					comentarioPost="Hora del té ¿quién dice yo??"
				/>
			</div>
			<div className="div__cardFeed">
				<CardFeed
					imagenFeed={feed2}
					usuarioFeed="Colo.08"
					meGusta={568}
					imagenUsuario={historia7}
					historiaVista={true}
					tiempoPublicado="6 h"
					comentarioPost="Disfrutando los dias de frío y la nieve en familia.😊"
				/>
			</div>
			<div className="div__cardFeed">
				<CardFeed
					imagenFeed={feed4}
					usuarioFeed="CiraOk"
					meGusta={35}
					imagenUsuario={historia5}
					tiempoPublicado="53 min"
					comentarioPost="🚀Ultimooo empujón, aprendiendo React💪"
				/>
			</div>
			<div className="div__cardFeed">
				<CardFeed
					imagenFeed={feed5}
					usuarioFeed="Maria84"
					meGusta={181}
					imagenUsuario={historia2}
					tiempoPublicado="8 h"
					comentarioPost="Maravillada con este manjar!!"
				/>
			</div>
			<div className="div__cardFeed">
				<CardFeed
					imagenFeed={feed3}
					usuarioFeed="Yayita_lp"
					meGusta={56}
					imagenUsuario={historia1}
					tiempoPublicado="8 h"
					comentarioPost="Maravillada con este manjar!!"
				/>
			</div>
		</>
	);
}

export default App;
