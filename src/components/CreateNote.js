import React, {useState} from 'react';
import List from './List'


function CreateNote() {

    const [notes, setNotes] = useState([])
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    function onSubmit(e) {
        e.preventDefault();
       setNotes(notes => [...notes, {
           subject: subject,
           description: description
       } ])
        document.getElementById("form").reset();

    }

   console.log(notes);

    return (
        <>
        <div className="create-container">
            <h3 className="create-note-text">Create new note</h3>
            <hr/>
            <form onSubmit={onSubmit} id="form">
            <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)}/>
            <hr className='short'/>
            <input type="text" placeholder="Note" onChange={(e) => setDescription(e.target.value)}/>
            <input type="submit"
                   className="submit"/>
            </form>
        </div>
           <List
                notes={notes}
            />
        </>
    );
}

export default CreateNote;
