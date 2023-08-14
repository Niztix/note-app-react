import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

    return (
        <div className="app-container">
            <main>
                <NoteInput addNote={onAddNoteHandler} />
            </main>
        </div>
    )
}

export default AddPage;