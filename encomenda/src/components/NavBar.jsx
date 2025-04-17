import { Link } from "react-router-dom"
import '../styles/Nav.css'

function NavBar(){
    return(
        <header>
        <nav>
         
            <Link to="/">🏡</Link>
            <br/>
            <Link to="/lanche1">🍔</Link>
            <br/>
            <Link to="/lanche2">🌭</Link>
            <br/>
            <Link to="/lanche3">🍽</Link>
            <br/>
            <Link to="/contato">📞Contato</Link>
         
        </nav>
        </header>
    )
}

export default NavBar;