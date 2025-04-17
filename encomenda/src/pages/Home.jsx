import Header from "../components/Header";
import Footer from "../components/Footer"
import Produtos from "../components/Produto";
import Combo from "../assets/Combo1.png";
import HotDog from "../assets/Hot-Dog2.png";
import Marmitex from "../assets/Marmitex.png";
import '../styles/Home.css'
import { useEffect, useState } from "react";

function Home() {
  const [carrousel, setCarrousel] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCarrousel(carrousel => carrousel + 1)
      if (carrousel >= 2) {
        setCarrousel(0)
      }
    }, 5000);
    return () => clearInterval(interval);
  })

  return (
    <>
      <section className="Main">
        <header>
      <Header />
        <h1 className="title">Comida por encomenda! <br />
        <p>Telefone: 📞(19)9099090 0090</p></h1>
        </header>
      <div className="Carrousel">
          {carrousel == 0 ? <img src={Combo} alt="carrouselFront" className="carim" /> : ""}
          {carrousel == 1 ? <img src={HotDog} alt="carrouselFront" className="carim" /> : ""}
          {carrousel == 2 ? <img src={Marmitex} alt="carrouselFront" className="carim" /> : ""}
        </div>

      <Produtos />

      </section>

      <Footer />
    </>
  )
}
export default Home;