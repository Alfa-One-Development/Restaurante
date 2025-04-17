import Header from "../components/Header";
import Footer from "../components/footer"
import Produtos from "../components/Produto";

import { Carousel } from "react-bootstrap";

import Combo from "../assets/Combo1.png";
import HotDog from "../assets/Hot-Dog2.png";
import Marmitex from "../assets/Marmitex.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  return (
    <>
      <Header/>
      <section className="Main">
      <Carousel >
            <Carousel.Item>
              <img
                src={Combo}
                loading="lazy"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={HotDog}
                loading="lazy"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Marmitex}
                loading="lazy"
              />
            </Carousel.Item>

          </Carousel>

          <Produtos/>

      </section>

      <Footer/>
    </>
  )
}
export default Home;