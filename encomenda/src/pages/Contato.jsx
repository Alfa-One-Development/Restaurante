import { useState } from "react";
import '../styles/Contato.css'
import { Link } from "react-router-dom";

function Contato() {
  const [contato1, setContato1] = useState(() => {
    const savedContato = localStorage.getItem('contato1');
    return savedContato ? JSON.parse(savedContato) : null ;
  })
  const [nome, setNome] = useState(() => {
    const savedNome = localStorage.getItem('nome');
    return savedNome ? JSON.parse(savedNome) : null;
  })
  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem('email');
    return savedEmail ? JSON.parse(savedEmail) : null;
  })
  const [escolaridade, setEscolaridade] = useState(() => {
    const savedEscolaridade = localStorage.getItem('escolaridade');
    return savedEscolaridade ? JSON.parse(savedEscolaridade) : null;
  })
  const [Opção, setOpção] = useState(() => {
    const savedOpção = localStorage.getItem('Opção');
    return savedOpção ? JSON.parse(savedOpção) : null;
  })

  function Enviar(e) {
    e.preventDefault();

    if (nome && email && contato1 && Opção && escolaridade) {
    localStorage.setItem('contato1', JSON.stringify(contato1));
    localStorage.setItem('nome', JSON.stringify(nome));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('escolaridade', JSON.stringify(escolaridade));
    localStorage.setItem('Opção', JSON.stringify(Opção));

    alert(`Nome: ${nome} \nEmail: ${email} \nGênero: ${contato1} \nOpção: ${Opção} \nEscolaridade: ${escolaridade}`);
    } else {
      alert('⚠ Preencha todos os campos! ⚠');
      }
  }

  return (

    <div className="box">
      <h2>Contato</h2>
      <h3>Tel 📞 (11)98736-2753 </h3>
      <form onSubmit={Enviar}>
        <label>Nome: 
          
        <input className="input"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder={`Digite seu Nome`}
        />
        </label>

        <br/>
        <br/>

      <label>Email: 
        <input className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={`Digite seu Email`}
        />
        </label>

        <br/>
        <br/>

      <label>Genero: 
      
        <input
          type="radio"
          value="Masculino"
          checked={contato1 === "Masculino"}
          onChange={(e) => setContato1(e.target.value)}
        />
        Masculino

        <input
          type="radio"
          value="Feminino"
          checked={contato1 === "Feminino"}
          onChange={(e) => setContato1(e.target.value)}
        />
        Feminino
        </label>

        <br/>
        <br/>

      <label>Opção: 
    
      <select onChange={(e) => setOpção(e.target.value)} value={Opção}>
        <option value="" >Selecione Uma Opção</option>
        <option value="opção 1"> opção 1 </option>
        <option value="opção 2"> opção 2 </option>
        <option value="opção 3"> opção 3 </option>
      </select>
      </label>

      <br/>
      <br/>

      <label>Escolaridade: 
    
      <select onChange={(e) => setEscolaridade(e.target.value)} value={escolaridade}>
        <option value="" >Selecione Uma Opção</option>
        <option value="1° grau"> 1° grau </option>
        <option value="2° grau"> 2° grau </option>
        <option value="graduação"> Graduação </option>
        <option value="pós-graduação"> Pós-Graduação </option>
      </select>
      </label>

      <br/>
      <br/>


      <br/>

      <div className="button-container">
      <button type="submit">Enviar</button>
      <Link to="/"><button type="button">Voltar</button></Link>
      </div>

      </form>

    </div>


  )
}

export default Contato