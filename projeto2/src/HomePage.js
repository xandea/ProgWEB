import React from "react";
import './HomePageStyle.css';
import { Link } from 'react-router-dom';
import Banner from './Images/banner.png';
import LogoBranca from './Images/logotipo.svg';
import Seta from './Images/seta.png';
import Barra from './Images/menumobile.png';
import LogoMobile from './Images/logomobile.png';
import ItauIcon from './Images/itau-icon.png';
import InterIcon from './Images/inter-icon.png';
import NubankIcon from './Images/nubank-icon.png';
import C6Icon from './Images/c6-icon.png';
import BradescoIcon from './Images/bradesco-icon.png';


function HomePage() {
    return(
        <body>
            <section className="background-container">
                <img className="background-image" src={Banner} alt="imagem de fundo" />
            </section>
            <header>
                <section className="wrapper">
                    <section className=" logo-container">
                        <img className="logo-branca" src={LogoBranca} alt="logotipo"/>
                    </section>
                    <section className="link-container">
                        <a className="link-menu" href="">PARA VOCÊ <img src={Seta} className="img-seta"/></a>
                        <a className="link-menu" href="">PARA SEU NEGÓCIO <img src={Seta}  className="img-seta"/></a>
                        <a className="link-menu" href="">SUPORTE PARA NEGÓCIOS <img src={Seta}  className="img-seta"/></a>
                    </section>
                    <section className="button-header">
                        <Link to="/signUp"className="button-entrar">Entrar</Link>
                        <a href="#"className="button-criar">Criar conta</a>
                    </section>
                </section>
            </header>
            {/*ELEMENTOS MOBILE*/}
            <div className="header-mobile">
                <section className="button-container-mobile">
                    <a className="button-header-mobile"><img src={Barra} className="barra-menu"/>Menu</a>
                </section>
                <section className="logo-container-mobile">
                    <img className="logo-mobile"src={LogoMobile}/>
                </section>
                <section className="button-container-mobile">
                    <a className="button-header-mobile">Entrar</a>
                </section>
            </div>
            <div className="text-principal-container-mobile">
                <h1 className="text-principal-mobile">O Paypal agora</h1>
                <h1 className="text-principal-mobile" >tem débito online*.</h1>
            </div>
            {/*FIM ELEMENTOS MOBILE*/}      
            <section className="wrapper">
                <section className="div-center "> 
                    <div className="area-body-title"> 
                        <h1 className="text-title">O PayPal agora</h1>
                        <h1 className="text-title">tem débito on-line*.</h1>
                    </div>
                    <div className="area-subtitle"> 
                        <h2 className="subtitulo"> Adicione o cartão de débito à sua carteira do PayPal e comemore pequenas vitórias todos os dias.</h2>
                    </div>
                    <div className="area-button"> 
                        <button className="text-button">
                            <a href="" className="text-button-link">Crie uma conta grátis</a>
                        </button>
                    </div>
                    <section className="area-bank"> 
                        <div className="area-bank-blocks-description">
                            <h3 className="text-bank">Cartões de débito</h3>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={ItauIcon}/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={BradescoIcon}/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={NubankIcon}/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={C6Icon}/>
                        </div>
                        <div className="area-bank-blocks">
                            <img className="image-bank" src={InterIcon}/>
                        </div>
                    </section>
                    <section>
                        <div className="area-term">
                            <h3 className="text-term">*Termos e condições aplicáveis</h3>
                        </div>
                    </section>
                </section>
            </section> 
            <footer>     
                <section className="footer-container" >
                    <p className="text-footer"> 
                        Quer conhecer as soluções do PayPal para Empresas? 
                        <span className="text-footer-mobile">
                            Conte com a gente para vender dentro 
                            ou fora do seu país.
                        </span>
                    </p>
                    <button className="button-footer">
                        <a href="" className="button-footer">Paypal para Empresas</a>
                    </button>
                </section>
            </footer>
        </body>
    );
}

export default HomePage;