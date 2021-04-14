import React, {useState } from 'react';
import axios from 'axios';
import './styleIndexExchange.css';
import LogoAzul from './../../Images/logoLogin.svg';
function IndexExchange(){
    

    const [moedaBase, setMoedaBase] = useState("");
    const [moedaCotacao, setMoedaCotacao] = useState("");
    const [valor, setValor] = useState("1");
    const [dadosDaRequesicao, setDadosDaRequisicao] = useState("");
    const [msgError,setMsgError] = useState("")
    
    const handleChangeMoedaBase =(e)=>{
        const moedaBaseValue = e.target.value;
        setMoedaBase(moedaBaseValue);
    }

    const handleChangeMoedaCotacao = (e)=>{
        const moedaCotacaoValue = e.target.value;
        setMoedaCotacao(moedaCotacaoValue);
    }

    const handleChangeValor = (e) =>{
        const valorValue = e.target.value;
        setValor(valorValue);
    }

    const converterMethod = async ()=>{
        if(moedaBase === "" && moedaCotacao ===""){
            setMsgError("Erro: É necessário selecionar uma moeda");
            document.getElementsByClassName("moedaBaseCotacao")[0].style.display="none";
            document.getElementsByClassName("moedaBase")[0].style.display="none";
            document.getElementsByClassName("moedaValor")[0].style.display="none";
            document.getElementsByClassName("msgError")[0].style.display="flex";
            document.getElementsByClassName("select")[0].style.border="0.5px solid red";
            document.getElementsByClassName("select")[1].style.border="0.5px solid red";

        }
        else if(moedaBase ==="" && moedaCotacao!==""){
            setMsgError("Erro: É necessário selecionar uma moeda base ao inves de cotacao");
            document.getElementsByClassName("moedaBaseCotacao")[0].style.display="none";
            document.getElementsByClassName("moedaBase")[0].style.display="none";
            document.getElementsByClassName("moedaValor")[0].style.display="none";
            document.getElementsByClassName("msgError")[0].style.display="flex";
            document.getElementsByClassName("select")[1].style.display="flex";
            document.getElementsByClassName("select")[0].style.border="0.5px solid red";
            document.getElementsByClassName("select")[1].style.border="0.5px solid black";

            
        }
        else if(moedaBase!=="" && moedaCotacao ===""){
            const resposta = await axios.get('https://v6.exchangerate-api.com/v6/863768c8d54f6b4767d23e6a/pair/'+
            moedaBase+'/BRL/'+valor);
            const dadosDaRequesicaoValue = resposta.data;
            console.log(dadosDaRequesicaoValue)
            setDadosDaRequisicao(dadosDaRequesicaoValue);
            document.getElementsByClassName("moedaBaseCotacao")[0].style.display="none";
            document.getElementsByClassName("msgError")[0].style.display="none";
            document.getElementsByClassName("moedaValor")[0].style.display="none";
            document.getElementsByClassName("moedaBase")[0].style.display="flex";
            document.getElementsByClassName("select")[0].style.border="0.5px solid black";
            document.getElementsByClassName("select")[1].style.border="0.5px solid black";
        }
        else{
            const resposta = await axios.get('https://v6.exchangerate-api.com/v6/863768c8d54f6b4767d23e6a/pair/'+
                                          moedaBase+'/'+moedaCotacao+'/'+valor);
            const dadosDaRequesicaoValue = resposta.data
            setDadosDaRequisicao(dadosDaRequesicaoValue); 
            document.getElementsByClassName("moedaBaseCotacao")[0].style.display="none";
            document.getElementsByClassName("moedaBase")[0].style.display="none";
            document.getElementsByClassName("msgError")[0].style.display="none";
            document.getElementsByClassName("moedaValor")[0].style.display="flex";
            document.getElementsByClassName("select")[0].style.border="0.5px solid black";
            document.getElementsByClassName("select")[1].style.border="0.5px solid black";
        }
        
    }
    
    
        return(
            <div className="divHeader">
                <img src={LogoAzul} className="logoazul" alt="logo"/>
                <h2>Cotação de Moedas</h2>
                <div className="divInformacao">
                    <span className="msgError">{msgError}</span>
                    <div className="subDivInformacao">
                        <section className="sectionInformacao"> 
                            <label>Valor</label>
                            <input type="money" placeholder="R$ 00,00" onChange={handleChangeValor} value={valor} className="inputValor"/>
                        </section>
                        <section className="sectionInformacao">
                            <label>Cotar de</label>
                            <select onChange={handleChangeMoedaBase} className="select">
                            <option value="">Selecione uma moeda base</option>
                                <option value="AED">AED    Emirados Árabes Unidos</option>
                                <option value="AFN">AFN    Afegão afegão</option>
                                <option value="ALL">ALL	Lek albanês</option>
                                <option value="AMD">AMD	Dram armênio</option>
                                <option value="ANG">ANG	Florim das Antilhas Holandesas</option>
                                <option value="AOA">AOA	Kwanza angolano</option>
                                <option value="ARS">ARS	Peso argentino</option>
                                <option value="AUD">AUD	Dólar australiano</option>
                                <option value="BOB">BOB	Boliviano</option>
                                <option value="BRL">BRL	real brasileiro</option>
                                <option value="BSD">BSD	Dólar das Bahamas</option>
                                <option value="CAD">CAD Dólar canadense</option>
                                <option value="CHF">CHF	Franco suíço</option>
                                <option value="CLP">CLP	Peso Chileno</option>
                                <option value="CNY">CNY	Renminbi Chinês</option>
                                <option value="COP">COP	Peso colombiano</option>
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
                        </section>
                        <section className="sectionInformacao">
                            <label>Para</label>
                            <select onChange={handleChangeMoedaCotacao} className="select">
                                <option value="">Selecione uma moeda cotacao</option>
                                <option value="AED">AED    Emirados Árabes Unidos</option>
                                <option value="AFN">AFN    Afegão afegão</option>
                                <option value="ALL">ALL	Lek albanês</option>
                                <option value="AMD">AMD	Dram armênio</option>
                                <option value="ANG">ANG	Florim das Antilhas Holandesas</option>
                                <option value="AOA">AOA	Kwanza angolano</option>
                                <option value="ARS">ARS	Peso argentino</option>
                                <option value="AUD">AUD	Dólar australiano</option>
                                <option value="BOB">BOB	Boliviano</option>
                                <option value="BRL">BRL	real brasileiro</option>
                                <option value="BSD">BSD	Dólar das Bahamas</option>
                                <option value="CAD">CAD Dólar canadense</option>
                                <option value="CHF">CHF	Franco suíço</option>
                                <option value="CLP">CLP	Peso Chileno</option>
                                <option value="CNY">CNY	Renminbi Chinês</option>
                                <option value="COP">COP	Peso colombiano</option>
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
                        </section>
                        <button onClick={converterMethod} className="buttonConverte"> Converter </button>
                    </div>
                </div>
                <div className="divResultado">
                    <section className="sectionResultadoOne">
                        <h3>Resultado da Cotação</h3>
                    </section>
                    <section  className="sectionResultadoTwo">
                       <label className="moedaBase">1 {dadosDaRequesicao['base_code']} equivale a {dadosDaRequesicao['conversion_rate']} BRL</label>
                       <label className="moedaBaseCotacao">1 {dadosDaRequesicao['base_code']} equivale a  {dadosDaRequesicao['conversion_rate']} {dadosDaRequesicao['target_code']}</label>
                       <label className="moedaValor">{valor} {dadosDaRequesicao['base_code']} equivale a {dadosDaRequesicao['conversion_result']} {dadosDaRequesicao['target_code']} </label>
                    </section>
                    
                </div>
            </div>
        );
}
export default IndexExchange;