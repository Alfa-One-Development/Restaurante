import { Link } from "react-router-dom";
import "../styles/Cards.css"

function Card({props}) {
    return (
      <div className="bigercard">
          <section className="bigcard">
          <Link to={props.location} className="Card">
            <img src={props.img} alt=""/>
            <h2>{props.nome}</h2>
            <p>Avaliacão: {props.avaliation}</p>
            <p>Preço do produto: {props.price}</p>
            <p className="description">{props.description}</p>
          </Link>
          </section>
          </div>
    )
}

export default Card;