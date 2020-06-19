import React,{useState, useReducer, useEffect, useRef} from 'react'
import { Reducer } from './Reducer';
import { v4 as uuidv4 } from 'uuid';
import { DisplayNote } from './DisplayNote';

export const InputField = () => {

  const InitialState = [
    {
      id: uuidv4(),
      text: "Do Homework"
    },
    {
      id: uuidv4(),
      text: "Take Out Trash"
    },
    {
      id: uuidv4(),
      text: "Clean Room"
    }
  ]

  const [state, dispatch] = useReducer(Reducer, InitialState)

  const [val, setVal] = useState('');

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  },[val])

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal('');
    dispatch({type:"add_note", payload:val})
  }

  const editNote = (note) => {
      setVal(note.text);
      dispatch({type:"edit_note", payload:note.id})
  }

  const deleteNote = (id) => {
    dispatch({type : "delete_note", payload:id })
  }

    return (
      <div>
        <form className="inp-form mt-4" onSubmit={handleSubmit}>
          <input
            className="form-control w-25"
            ref={ref}
            type="text"
            placeholder="Enter Note"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button className="btn btn-outline-primary ml-3" type="submit">
            Add Note
          </button>
        </form>
        <DisplayNote state={state} deleteNote={deleteNote} editNote={editNote} />
      </div>
    );
}
