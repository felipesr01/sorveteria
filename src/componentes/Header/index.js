import React from "react";
import {Link} from 'react-router-dom'
import './style.css'

export default function Header() {
    return(
        <div className="topo">
            <img src="/assets/logo.png" alt="Logo"/>
            
            <div className="linha"></div>
            <nav>
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/sabores'>Sabores</Link>
                <Link className="link" to='/sobre'>Sobre</Link>
            </nav>
        </div>
    )
}

