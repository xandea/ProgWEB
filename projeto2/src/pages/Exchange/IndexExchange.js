import React, {useState, useEffect} from 'react';
import { Link,  useHistory} from 'react-router-dom';
import axios from 'axios';
import './styleIndexExchange.css';
import LogoAzul from './../../Images/logoLogin.svg';


function IndexExchange(){

    const [moedaBase, setMoedaBase] = useState("");
    const [moedaCotacao, setMoedaCotacao] = useState("");
    const [valor, setValor] = useState("1");
    const [dadosDaRequesicao, setDadosDaRequisicao] = useState("");
    const [msgError,setMsgError] = useState("");
    const [mudaEstiloOne,setMudaEstiloOne] = useState();
    const [mudaEstiloTwo,setMudaEstiloTwo] = useState();

    const history = useHistory();

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth()+1;
    const ano = data.getFullYear();
    const horario = data.getHours();
    const minuto = data.getUTCMinutes();
    
    
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
            setMsgError("Erro: É necessário selecionar uma moeda base");
            setMudaEstiloOne({border:"0.5px solid red"});
            setMudaEstiloTwo({border:"0.5px solid red"});
           
        }
        else if(moedaBase ==="" && moedaCotacao!==""){
            setMsgError("Erro: É necessário selecionar uma moeda base ao invés de cotação");
            setMudaEstiloOne({border:"0.5px solid red"});
            setMudaEstiloTwo({border:"0.5px solid black"});
        }
        else if(moedaBase!=="" && moedaCotacao ===""){
            const resposta = await axios.get('https://v6.exchangerate-api.com/v6/863768c8d54f6b4767d23e6a/pair/'+
            moedaBase+'/BRL/'+valor);
            const dadosDaRequesicaoValue = resposta.data;
            setDadosDaRequisicao(dadosDaRequesicaoValue);
            setMsgError("MoedaBaseSelecionado");
            setMudaEstiloOne({border:"0.5px solid black"});
            setMudaEstiloTwo({border:"0.5px solid black"});
        }
        else{
            const resposta = await axios.get('https://v6.exchangerate-api.com/v6/863768c8d54f6b4767d23e6a/pair/'+
                                          moedaBase+'/'+moedaCotacao+'/'+valor);
            const dadosDaRequesicaoValue = resposta.data;
            setDadosDaRequisicao(dadosDaRequesicaoValue); 
            setMsgError("MoedaBaseCotacaoSelecionado");
            setMudaEstiloOne({border:"0.5px solid black"});
            setMudaEstiloTwo({border:"0.5px solid black"});
          
        }
        
    }
    
    const deslogar = (e) =>{
        localStorage.removeItem('@login/email');
    }

    function VerificaUsuarioLogado(){
        const usuario = localStorage.getItem('@login/email');
        console.log(usuario);
        if(usuario === null){
            history.push('SignIn');
        }
    }

    useEffect(() => {
        VerificaUsuarioLogado();
      }, );
    
        return(
            <div className="divHeader">
                <div className="subDivHeader">
                    <div className="menuDropdown">
                        <button className="btnDropdown">Menu</button>
                        <div className="sectionLinks">
                            <Link to="/">Pagina Inicial</Link>
                            <Link to="/" onClick={deslogar}>Logout</Link>
                        </div>
                    </div>
                    <div className="divImgLogoAzul">
                        <img src={LogoAzul} className="logoazul" alt="logo"/>
                    </div>
                </div>
                <section className="textCotacao">
                    <h2 className="tagh2">Cotação de Moedas</h2>
                </section>
                <div className="divInformacao">
                    {msgError !== "MoedaBaseSelecionado" && msgError !== "MoedaBaseCotacaoSelecionado"  ? <span className="msgError" style={{display:"flex"}}>{msgError}</span> : "" }
                    <div className="subDivInformacao">
                        <section className="sectionInformacao"> 
                            <label className="labelInformacao">Valor</label>
                            <input type="money" placeholder="R$ 00,00" onChange={handleChangeValor} value={valor} className="inputValor"/>
                        </section>
                        <section className="sectionInformacao">
                            <label className="labelInformacao">Cotar de</label>
                                <select onChange={handleChangeMoedaBase} className="select" style={mudaEstiloOne}>
                                    <option value="">Selecione uma moeda base</option>
                                    <option value="AED">AED Emirados Árabes Unidos</option>
                                    <option value="AFN">AFN Afegão afegão</option>
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
                            <label className="labelInformacao">Para</label>
                                <select onChange={handleChangeMoedaCotacao} className="select" style={mudaEstiloTwo}> 
                                    <option value="">Selecione uma moeda cotacao</option>
                                    <option value="AED">AED  Emirados Árabes Unidos</option>
                                    <option value="AFN">AFN  Afegão afegão</option>
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
                    {msgError === "MoedaBaseSelecionado" || msgError === "MoedaBaseCotacaoSelecionado" ? 
                        <section className="sectionResultadoOne" style={{display:"flex"}}>
                            <h3 className="tagh3">Resultado da Cotação</h3>
                            <section className="sectionData" style={{display:"flex"}}>
                                <label className="labelData">Data da Cotação:  <span className="spanData">{dia}/{mes}/{ano}</span></label>
                                <label className="labelData">Horário da Cotação: <span className="spanData">{horario}:{minuto}</span></label>
                            </section>
                        </section>
                    : "" }
                    <section  className="sectionResultadoTwo">
                        {msgError === "MoedaBaseSelecionado"?  
                            <label className="moedaBase" style={{display:"flex"}}>{valor} {dadosDaRequesicao['base_code']} equivale a {dadosDaRequesicao['conversion_result']} BRL</label>
                         : "" }
                        {msgError === "MoedaBaseCotacaoSelecionado"?
                            <label className="moedaValor" style={{display:"flex"}}>{valor} {dadosDaRequesicao['base_code']} equivale a {dadosDaRequesicao['conversion_result']} {dadosDaRequesicao['target_code']} </label>
                        : "" }
                    </section>
                </div>
            </div>
        );
}
export default IndexExchange;