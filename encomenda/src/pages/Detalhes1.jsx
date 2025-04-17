import Combo1 from "../assets/Combo1.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/details.css";

function Lanche() {

  return (
    <div>
      <NavBar />
      <br />
      <section className="imgcon">
        <img src={Combo1} alt="X-Ratão" />
        <section className="info">
          <h1>Combo X-Ratão</h1>
          <p>
            Ingredientes : Pão com Gergilim, Cebola Crispy, Maionese Caseira, 2
            Hamburgueres, Queijo, Bacon em Fatias, 100G DE Batata Frita e Uma
            lata de Coca-Cola 350ml.
          </p>
        </section>
      </section>
      <Footer/>
    </div>
  );

}

export default Lanche;
