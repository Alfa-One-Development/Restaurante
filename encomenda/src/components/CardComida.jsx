import { Link } from "react-router-dom";
import "../styles/Cards.css"

function Card({props}) {
    return (
          <Link to={props.location} className="Card">
            <img src={props.img} alt=""/>
            <h4>{props.nome}</h4>
            <p>Avaliacão: {props.avaliation}</p>
            <p>Preço do produto: {props.price}</p>
            <p className="description">{props.description}</p>
          </Link>
    )
}

export default Card;