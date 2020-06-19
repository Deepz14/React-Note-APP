import React from 'react'

export const DisplayNote = ({state, deleteNote, editNote}) => {
    return (
        <div className="display-container mt-4">
            {
                state.map((note,index) => (
                    <div className="display-note m-3 p-3" key={index}>
                        <h5>{note.text}</h5>
                        <div className="note-btn">
                            <button className="btn btn-outline-primary ml-2" onClick={() => editNote(note)}>Edit</button>
                            <button className="btn btn-outline-danger ml-2" onClick={() => deleteNote(note.id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
