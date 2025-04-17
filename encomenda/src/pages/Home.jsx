import Header from "../components/Header";
import Footer from "../components/Footer"
import Produtos from "../components/Produto";
import Combo from "../assets/Combo1.png";
import HotDog from "../assets/Hot-Dog2.png";
import Marmitex from "../assets/Marmitex.png";
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
      <Header />
      <section className="Main">
        <h1>Home Page</h1>
      <div className="Carrousel">
          {carrousel == 0 ? <img src={Combo} alt="carrouselFront" /> : ""}
          {carrousel == 1 ? <img src={HotDog} alt="carrouselFront" /> : ""}
          {carrousel == 2 ? <img src={Marmitex} alt="carrouselFront" /> : ""}
        </div>

      <Produtos />

      </section>

      <Footer />
    </>
  )
}
export default Home;