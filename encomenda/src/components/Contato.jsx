import { useState, useEffect } from "react";




function Contato(){
   const [contato1, setContato1] = useState('')
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
    const [Opção, setOpção] = useState('')
    const [lanche, setLanche] = useState('')

    useEffect (() => {
        const ProdutoSalvo = localStorage.getItem('lanche')
        if (ProdutoSalvo) {
            setLanche(ProdutoSalvo)
        }
    }, [])
    const handlesave = () => {
        localStorage.setItem('lanche', lanche)
    }

   return(
      
         <div>
           <h2>Contato</h2>
           <br></br>
           <br></br>
           <form>Nome:
            
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder= {`Digite seu ${contato1}`}
            />
            </form>
            <br></br>
            <form>Email:
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder= {`Digite seu ${contato1}`}
            />
            </form>
<br></br>
            <form>Sexo:
           
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
         </form>
         
         <br></br>
         
         <label>Opção: </label>
        <select onChange={(e) => setOpção(e.target.value)} value={Opção}>
          <option value="" >Selecione Uma Opção</option>
          <option value="opção 1"> opção 1 </option>
          <option value="opção 2"> opção 2 </option>
          <option value="opção 3"> opção 3 </option>
        </select>
           <br></br>
           <br></br>
        
        <label>Escolaridade: </label>
        <select onChange={(e) => setEscolaridade(e.target.value)} value={escolaridade}>
          <option value="" >Selecione Uma Opção</option>
          <option value="1° grau"> 1° grau </option>
          <option value="2° grau"> 2° grau </option>
          <option value="graduação"> Graduação </option>
          <option value="pós-graduação"> Pós-Graduação </option>
        </select>
           <p>Sua escolaridade é {escolaridade}</p>

           <br></br>
           
           <h3>Tel  (11)98736-2753 </h3>
           
            <button onClick={handlesave}>Enviar</button>
           
           </div>


   )}

export default Contato