import React from "react";
import './style.css'

export default function Footer() {
    return (
        <div className="rodape">
            <div className="rodape-cima">
                <img src="/assets/logo.png" alt="Logo"/>
                <div className="informacoes">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="informacoes">
                    <h3>CONTATO</h3>
                    <p><a href="mailto:info@meusite.com">info@meusite.com</a></p>
                    <p>Tel: <a href="telto:8534567890">(85) 3456-7890</a></p>
                </div>
                <div className="informacoes">
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="rodape-baixo">
                <p>Gelateria</p>
                <p>Orhulhosamente desenvolvido por <a href="https://github.com/felipesr01" target="_blank">Felipe Souza</a></p>
            </div>
        </div>
    )
}