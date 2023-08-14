import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";
import AddButton from "../components/AddButton";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes()
        }
    }

    render() {
        return (
            <div>
                <section>
                    <NoteList notes={this.state.notes} />
                </section>
                <section className="homepage__action">
                    <AddButton />
                </section>
            </div>
        )
    }
}

export default HomePage;