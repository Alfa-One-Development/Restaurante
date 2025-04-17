import NavBar from "../components/NavBar";
import HotDog2 from "../assets/Hot-Dog2.png";

function HotDog() {
  return (
    <div>
      <NavBar />
      <br />
      <section className="imgcon">
        <img src={HotDog2} alt="Dogudo" />
        <section className="info">
          <h1>Dogão</h1>
          <p>
            Ingredientes : Pão, 2 Salcichas, Purê de Batata, Vinagrete, Queijo
            Ralado, Batata Palha, Bacon em Cubos e Catupiry
          </p>
        </section>
      </section>
    </div>
  );
  {
    /* return (
        <div>
              <NavBar />
              <img src={HotDog2} alt="Dogão" />
      <h1>Dogão</h1>
      <p>Ingredientes : Pão, 2 Salcichas, Purê de Batata, Vinagrete, Queijo Ralado, Batata Palha, Bacon em Cubos e Catupiry </p>
      </div>
    )*/
  }
}

export default HotDog;
