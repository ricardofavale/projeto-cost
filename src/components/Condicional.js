import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    //criando um email
    function enviarEmail(event){
        event.preventDefault()
        setUserEmail(email)
    }

    //limpando o valor do email
    function limparEmail(event){
        event.preventDefault()
        setUserEmail('')
    }

    return(
        <div>
            <h2>cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>

                {userEmail &&(
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
                
            </form>
        </div>
    )
}

export default Condicional