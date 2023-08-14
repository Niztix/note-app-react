import React from "react";
import PropTypes from 'prop-types';
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <p>Tidak ada catatan</p>

            ) : (notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    {...note} />
            ))
            )}
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
}

export default NoteList;