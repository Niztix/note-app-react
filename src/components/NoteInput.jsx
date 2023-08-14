import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.charLimit)
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <section>
                <div className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
                    <input className="add-new-page__input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="add-new-page__input__body" placeholder="Tuliskan Catatanmu Disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                </div>
                <div className="add-new-page__action">
                    <button className="action" type="button" title="simpan" onClick={this.onSubmitEventHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="check"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path></svg></button>
                </div>
            </section>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;