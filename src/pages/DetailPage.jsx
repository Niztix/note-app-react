import React from "react";
import PropTypes from "prop-types"
import { getNote, deleteNote, getAllNotes } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useNavigate, useParams } from "react-router-dom";

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    return <DetailPage id={id} navigate={navigate} />;
}
class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        const { navigate } = this.props

        this.setState(() => {
            return {
                note: getAllNotes(),
            }
        });

        navigate('/');
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
                    <NoteDetail {...this.state.note} onDelete={this.onDeleteHandler} />
                </main>
            </div>
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailPageWrapper;