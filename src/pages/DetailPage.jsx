import React from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id),
        }
    }

    render () {
        if (this.state.note == undefined) {
            return (
                <div className="app-container">
                    <p>404 Pages! Not Found</p>
                </div>
            );
        }

        return (
            <div className="app-container">
                <main>
                    <NoteDetail {...this.state.note} />
                </main>
            </div>
        )
    }
}

export default DetailPage;