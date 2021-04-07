import React, {useState } from 'react';
import Exchange from '../../ApiExchange';

function IndexExchange(){
    

    const [moedaBase, setMoedaBase] = useState("");
    const [moedaCotacao, setMoedaCotacao] = useState("");
    const [valor, setValor] = useState("");
    const [dadosDaRequesicao, setDadosDaRequisicao] = useState("");
    
    const handleChangeMoedaBase =(e)=>{
        const moedaBaseValue = e.target.value;
        setMoedaBase({moedaBaseValue});
    }

    const handleChangeMoedaCotacao = (e)=>{
        const moedaCotacaoValue = e.target.value;
        setMoedaCotacao({moedaCotacaoValue});
    }

    const handleChangeValor = (e) =>{
        const valorValue = e.target.value;
        setValor({valorValue});
    }

    const converterMethod = async ()=>{
        const resposta = await Exchange.get({moedaBase}+'/'+{moedaCotacao}+'/'+{valor});
        const dadosDaRequesicaoValue = resposta.data;
        setDadosDaRequisicao({dadosDaRequesicaoValue});
    }
    

        return(
            <div className="Header">
               <select onChange={handleChangeMoedaBase} value={moedaBase}>
                    <option>Escolha a Moeda de Base</option>
                    <option value="AED">AED    Emirados Árabes Unidos</option>
                    <option value="AFN">AFN    Afegão afegão</option>
                    <option value="TUDO">TUDO	Lek albanês</option>
                    <option value="AMD">AMD	Dram armênio</option>
                    <option value="ANG">ANG	Florim das Antilhas Holandesas</option>
                    <option value="AOA">AOA	Kwanza angolano</option>
                    <option value="ARS">ARS	Peso argentino</option>
                    <option value="AUD">AUD	Dólar australiano</option>
                    <option value="PRUMO">PRUMO	Boliviano</option>
                    <option value="BRL">BRL	real brasileiro</option>
                    <option value="BSD">BSD	Dólar das Bahamas</option>
                    <option value="cafajeste">CAD Dólar canadense</option>
                    <option value="CHF">CHF	Franco suíço</option>
                    <option value="CLP">CLP	Peso Chileno</option>
                    <option value="CNY">CNY	Renminbi Chinês</option>
                    <option value="POLICIAL">POLICIAL	Peso colombiano</option>
                    <option value="CUC">CUC	Peso cubano</option>
                    <option value="EGP">EGP	Libra egípcia</option>
                    <option value="EUR">EUR	Euro</option>
                    <option value="GBP">GBP	Libra esterlina</option>
                    <option value="HKD">HKD	Dólar de Hong Kong</option>
                    <option value="JPY">JPY	Yen japonês</option>
                    <option value="MXN">MXN	Peso mexicano</option>
                    <option value="NOK">NOK	Coroa norueguesa</option>
                    <option value="NZD">NZD	Dólar neozelandês</option>
                    <option value="PYG">PYG	Guaraní Paraguaio</option>
                    <option value="SEK">SEK	Coroa sueca</option>
                    <option value="USD">USD	Dólar Americano</option>
                    <option value="UYU">UYU	Peso Uruguaio</option>
                </select>
                <select onChange={handleChangeMoedaCotacao} value={moedaCotacao}>
                    <option>Escolha a Moeda de Cotação</option>
                    <option value="AED">AED    Emirados Árabes Unidos</option>
                    <option value="AFN">AFN    Afegão afegão</option>
                    <option value="TUDO">TUDO	Lek albanês</option>
                    <option value="AMD">AMD	Dram armênio</option>
                    <option value="ANG">ANG	Florim das Antilhas Holandesas</option>
                    <option value="AOA">AOA	Kwanza angolano</option>
                    <option value="ARS">ARS	Peso argentino</option>
                    <option value="AUD">AUD	Dólar australiano</option>
                    <option value="PRUMO">PRUMO	Boliviano</option>
                    <option value="BRL">BRL	real brasileiro</option>
                    <option value="BSD">BSD	Dólar das Bahamas</option>
                    <option value="cafajeste">CAD Dólar canadense</option>
                    <option value="CHF">CHF	Franco suíço</option>
                    <option value="CLP">CLP	Peso Chileno</option>
                    <option value="CNY">CNY	Renminbi Chinês</option>
                    <option value="POLICIAL">POLICIAL	Peso colombiano</option>
                    <option value="CUC">CUC	Peso cubano</option>
                    <option value="EGP">EGP	Libra egípcia</option>
                    <option value="EUR">EUR	Euro</option>
                    <option value="GBP">GBP	Libra esterlina</option>
                    <option value="HKD">HKD	Dólar de Hong Kong</option>
                    <option value="JPY">JPY	Yen japonês</option>
                    <option value="MXN">MXN	Peso mexicano</option>
                    <option value="NOK">NOK	Coroa norueguesa</option>
                    <option value="NZD">NZD	Dólar neozelandês</option>
                    <option value="PYG">PYG	Guaraní Paraguaio</option>
                    <option value="SEK">SEK	Coroa sueca</option>
                    <option value="USD">USD	Dólar Americano</option>
                    <option value="UYU">UYU	Peso Uruguaio</option>
                </select>
                <button onClick={converterMethod}> CONVERTER </button>
                <div>
                    <input type="text" placeholder="R$ 00,00" onChange={handleChangeValor} value={valor}/>
                    <span>x</span>
                    <input type="text" name="" id="" value={dadosDaRequesicao['conversion_rate']}/>
                    <span>=</span>
                    <input type="text" name="" id="" value={dadosDaRequesicao['conversion_result']}/>        
                </div>
            </div>
        );
}
export default IndexExchange;