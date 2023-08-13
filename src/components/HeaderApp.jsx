import React from "react";
import { Link } from "react-router-dom";

function HeaderApp() {
    return (
        <header>
            <h1><Link to="/">Notes App</Link></h1>
            <div className="navigation">
                <ul>
                    <li><Link to="arsip">Arsip</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderApp;