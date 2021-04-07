//import { render } from '@testing-library/react';
import React, {/*Component,*/ useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import LogoAzul from './../../Images/logoLogin.svg';
import './SignIn.css';


function Example() {
    const history = useHistory();
    // Declaração das variaveis globais
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e) => {
        const emailValeu = e.target.value
        setEmail(emailValeu)
    }
    const onChangePassword = (e) => {
        const passwordValue = e.target.value
        setPassword(passwordValue)
    }

    async function validationLogin() {
        console.log(email)
        console.log(password)
        try {
            const response = axios.post('https:/reqres.in/api/login',{
              email: email,//"eve.holt@reqres.in",
              password: password//"cityslicka"
              })
            console.log(response)
            localStorage.setItem('@login/email', email)
            //window.location.reload();
            history.push("/exchange")
          } catch (error) {
            console.error(error);
          }
    }
    
    useEffect(()=>{
        
    })
      
    return(
    <body className="bodySingIn">
        <div className="container">
            <img src={LogoAzul} className="logoTipo" alt="logo"/>
            <div className="containerInputs">
                <input
                className="input" 
                type="email" 
                name="user"
                placeholder="e-mail"
                onChange={onChangeEmail}
                />
                <input
                className="input"  
                type="text" 
                name="senha"
                placeholder="senha"
                onChange={onChangePassword}
                />
            </div>
            <div className="containerButton">
                <button className="buttonSend" onClick={validationLogin}>Avançar</button>
            </div>
            <div className="alternativeContainer">
                <div className="line"><span className="alternative">ou</span></div>
                
            </div>
            
            <Link to="/exchange">Ir para a página exchange</Link>
        </div>
    </body>
        
    )
}

export default Example;
