import { render } from '@testing-library/react'
import React, { Component } from 'react'

class SignUp extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          email:'',
          password:''
        };
      }

    render(){
        return(
            <container>
                <div>
                    <input 
                    type="email" 
                    name="usuario"
                    placeholder="e-mail"
                    value={this.state.email}
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

export default SignUp;
