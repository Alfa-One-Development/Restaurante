import Header from "../components/Header";
import Footer from "../components/Footer"
import Produtos from "../components/Produto";
import Combo from "../assets/Combo1.png";
import HotDog from "../assets/Hot-Dog2.png";
import Marmitex from "../assets/Marmitex.png";

function Home() {

  return (
    <>
      <Header />
      <section className="Main">
        <h1>Home Page</h1>

      <Produtos />

      </section>

      <Footer />
    </>
  )
}
export default Home;