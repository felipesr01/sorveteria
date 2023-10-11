import React from "react";
import {Link} from 'react-router-dom'

export default function Header() {
    return(
        <div className="topo">
            <img src="/assets/logo.png" alt="Logo"/>

            <nav>
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/sabores'>Sabores</Link>
                <Link className="link" to='/sobre'>Sobre</Link>
            </nav>
        </div>
    )
}