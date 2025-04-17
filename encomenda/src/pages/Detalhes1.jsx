import Combo1 from '../assets/Combo1.PNG'
import NavBar from '../components/NavBar'

function Lanche() {

    return (
        <div>
              <NavBar />
            <img src={Combo1} alt="X-Ratão" />
            <h1>Combo X-Ratão</h1>
            <p>Ingredientes : Pão com Gergilim, Cebola Crispy, Maionese Caseira, 2 Hamburgueres, Queijo, Bacon em Fatias, 100G DE Batata Frita e Uma lata de Coca-Cola 350ml.</p>
        </div>
    )
}

export default Lanche