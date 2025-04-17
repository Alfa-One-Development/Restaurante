import NavBar from "../components/NavBar";
import Marmitex from '../assets/Marmitex'

function Marmita() {

    return (
        <div>
              <NavBar />
              <img src={Marmitex} alt="Marmitona" />
      <h1>Marmitex</h1>
      <p>Ingredientes : Arroz, Feijão, Farofa, Carne, Frango e Linguiça.</p>
      <p>Preço: R$ 25,00</p>
      </div>
    )
}

export default Marmita