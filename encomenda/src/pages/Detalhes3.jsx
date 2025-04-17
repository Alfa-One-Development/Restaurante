import NavBar from "../components/NavBar";
import Marmitex from "../assets/Marmitex.png";

function Marmita() {
  return (
    <div>
      <NavBar />
      <br />
      <section className="imgcon">
        <img src={Marmitex} alt="PF" />
        <section className="info">
          <h1>Marmitex</h1>
          <p>Ingredientes : Arroz, Feijão, Farofa, Carne, Frango e Linguiça.</p>
        </section>
      </section>
    </div>
  );
  {
    /*return (
        <div>
              <NavBar />
              <img src={Marmitex} alt="Marmitona" />
      <h1>Marmitex</h1>
      <p>Ingredientes : Arroz, Feijão, Farofa, Carne, Frango e Linguiça.</p>
      </div>
    )*/
  }
}

export default Marmita;
