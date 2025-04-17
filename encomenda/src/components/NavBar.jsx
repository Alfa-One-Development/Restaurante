import { Link } from "react-router-dom"

function NavBar(){
    return(
        <header>
        <nav>
         
            <Link to="/">🏡Home</Link>
            <br/>
            <Link to="/lanche1">🍔Lanche</Link>
            <br/>
            <Link to="/lanche2">🌭Hot-Dog</Link>
            <br/>
            <Link to="/lanche3">🍱Marmitex</Link>
            <br/>
            <Link to="/contato">📞Contato</Link>
         
        </nav>
        </header>
    )
}

export default NavBar;