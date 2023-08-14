import React from "react";
import { Link } from "react-router-dom";

function HeaderApp() {
    return (
        <header>
            <h1><Link to="/">Notes App</Link></h1>
        </header>
    );
}

export default HeaderApp;