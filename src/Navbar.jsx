
import "./css/navbar.css"
const Navbar = ({usuario , setEstaLogueado}) => {
    const cerrarSesion = () => {
        setEstaLogueado(false);
    };
  return (
    <nav className='navbar'>
      Hola {usuario}!
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </nav>
  )
}

export default Navbar
