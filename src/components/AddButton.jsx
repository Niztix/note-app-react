import React from "react";
import { Link } from "react-router-dom";

function AddButton() {
    return (
        <Link to="/notes/new">
            <button className="action" type="button" title="tambah">+</button>
        </Link>
    )
}

export default AddButton;