import NavBar from "../components/NavBar";
import HotDog2 from '../assets/Hot-Dog2.png'

function HotDog() {

    return (
        <div>
              <NavBar />
              <img src={HotDog2} alt="Dogão" />
      <h1>Dogão</h1>
      <p>Ingredientes : Pão, 2 Salcichas, Purê de Batata, Vinagrete, <br  />Queijo Ralado, Batata Palha, Bacon em Cubos e Catupiry </p>
      <p>Preço: R$ 20,00</p>
      </div>
    )

}

export default HotDog