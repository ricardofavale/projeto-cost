import { useState } from 'react'

function Form(){

    function cadastrarUsuario(event){
        event.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    //[nome lido, nome alterado]
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
      <div>
        <h1>Meu formulário</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Digite o seu nome"
                onChange={(e) => setName(e.target.value)}
                //cada letra digitada modifica o valor do state
                ></input>
            </div>
            <div>
            <label htmlFor="password">Senha:</label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Digite a sua senha"
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
        </form>
      </div>  
    )
}

export default Form