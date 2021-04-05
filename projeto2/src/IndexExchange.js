import React, { Component } from 'react';
import Exchange from './ApiExchange';

class IndexExchange extends Component{
    
    state ={
        dadosDarequesicao: [],
    }

    async componentDidMount(){
        const resposta = await Exchange.get('USD/BRL/5');
        this.setState({dadosDarequesicao: resposta.data})
    }
    
    render(){
       const {dadosDarequesicao} = this.state

       //const resultado = dadosDarequesicao['result'],
             //conversion_rate = dadosDarequesicao['conversion_rate'];

        return(
            <div className="Header">
                <li>{dadosDarequesicao['conversion_rate']}</li>
                <li>{dadosDarequesicao['conversion_result']}</li>

            </div>
        );
    }
}

export default IndexExchange;