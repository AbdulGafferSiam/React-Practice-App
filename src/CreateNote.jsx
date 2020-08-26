import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const noteHandler = (event) => {
        let { value, name } = event.target;
        setNote((preValue) => {
            return {
                ...preValue, [name]: value
            }
        });
    }

    const btnAddNoteHandler = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
    }
    const expandIt = () => {
        setExpand(true);
    }

    const minimizeIt = () => {
        setExpand(false);
    }

    return (
        <>
            <div className="main_note" onDoubleClick={minimizeIt}>
                <form>
                    {
                        expand ?
                            <input
                                type="text"
                                placeholder="Title"
                                autoComplete="off"
                                name="title"
                                value={note.title}
                                onChange={noteHandler} /> : null
                    }
                    <textarea
                        rows="3"
                        cols="50"
                        placeholder="Write a note..."
                        name="content"
                        value={note.content}
                        onChange={noteHandler}
                        onClick={expandIt}
                    />
                    {
                        expand ?
                            <Button className="MuiButton-root"onClick={btnAddNoteHandler}>
                                <AddIcon className="plus_sign" />
                            </Button> : null
                    }
                </form>
            </div>
        </>
    );
}

export default CreateNote;