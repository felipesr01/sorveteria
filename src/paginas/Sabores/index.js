import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import './style.css'

export default function Sabores() {
    return (
        <div>
            <Header/>
            <div className="sabores">
                <section className="banner-sabores">
                    <h1>NOSSOS SABORES</h1>
                </section>
                <h2>SABORES DE SORVETE</h2>
                <section className="area-produtos">
                    
                    <div className="card">
                        <img src="/assets/sabor-oreo.png" alt="Sorvete Oreo"/>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className="card">
                        <img src="/assets/sabor-pistache.png" alt="Sorvete Pistache"/>
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className="card">
                        <img src="/assets/sabor-cookies-avela.png" alt="Sorvete Cookies e Avela"/>
                        <h3>Sorvete de Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className="card">
                        <img src="/assets/sorbet-kiwi.png" alt="Sorvete Kiwi"/>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className="card">
                        <img src="/assets/sorbet-morango.png" alt="Sorvete Morango"/>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="card">
                        <img src="/assets/sorbet-limao.png" alt="Sorvete Limao"/>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}