import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes()
        }
    }

    render() {
        return (
            <section>
                <NoteList notes={this.state.notes} />
            </section>
        )
    }
}

export default HomePage;