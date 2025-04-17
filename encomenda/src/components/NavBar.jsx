import { Link } from "react-router-dom"


function NavBar(){
    return(
        <header>
        <nav>
         
            <Link to="/">🏡Home</Link>
            <br/>
            <Link to="/Detalhes1">🍔Lanche</Link>
            <br/>
            <Link to="/Detalhes2">🌭Hot-Dog</Link>
            <br/>
            <Link to="/Detalhes3">🍱Marmitex</Link>
            <br/>
         
        </nav>
        </header>
    )
}

export default NavBar;