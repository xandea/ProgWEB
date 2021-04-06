import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';

    function Example() {
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

        console.log(email)
        console.log(password)

        return(
            <container>
                <div>
                    <input 
                    type="email" 
                    name="user"
                    placeholder="e-mail"
                    onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    name="senha"
                    placeholder="senha"
                    onChange={onChangePassword}
                    />
                </div>
                <button>Enviar</button>
            </container>
        )
}



    
    

    
/*
    render(){
        return(
            <container>
                <div>
                    <input 
                    type="email" 
                    name="user"
                    placeholder="e-mail"
                    value={this.state.email}
                    onChange={this.setEmail}
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    name="senha"
                    placeholder="senha"
                    />
                </div>
                <button>Enviar</button>
            </container>
          
        )
    }
}
*/
export default Example;
