import Combo from "../assets/Combo1.png";
import HotDog from "../assets/Hot-Dog2.png";
import Marmitex from "../assets/Marmitex.png";
import Card from "../components/CardComida";
import '../Style/Card.css'

function CardComida(){
    const Comida = {
        Combo: {
            location: "/lanche1",
            nome: "Combo do Gordo",
            img: Combo,
            price: "R$ 30",
            avaliation: "⭐⭐⭐",
            description: "Combo: oferta promocional de itens relacionados com menor preço."
        },

        Dog: {
            location: "/lanche2",
            nome: "Hot Dog",
            img: HotDog,
            price: "R$ 20",
            avaliation: "⭐★★",
            description: "Um hot dog pode levar uma grande variedade de ingredientes, e o que vai nele depende muito da preferência pessoal"
        },

        Marmitex: {
            location: "/lanche3",
            nome: "Marmitex",
            img: Marmitex,
            price: "R$ 25",
            avaliation: "⭐⭐★",
            description: "Marmitex: refeição individual em recipiente para transporte e consumo prático."
        }
    }

    return (
        <>
            <h2 className="Passagens">Cardapio</h2>

            <article className="Cards">

            <Card props = {Comida.lanche1}/>
            <Card props = {Comida.lanche2}/>
            <Card props = {Comida.lanche}/>

            </article>

          </>
    )

}

export default CardComida;