import { Link } from "react-router-dom"; 
function Nav() { 
    return ( <nav className="navbar"> 
    <h2>Mi Sitio</h2> 
    <div className="menu"> 
        <Link to="/">Inicio</Link> 
        <Link to="/servicios">Servicios</Link> 
        <Link to="/contacto">Contacto</Link> 
    </div> 
    </nav> ); 
} export default Nav;