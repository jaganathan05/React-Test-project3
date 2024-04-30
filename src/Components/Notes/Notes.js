import React, { useContext, useRef, useState, useEffect, useCallback } from "react";
import './Notes.css';
import NoteForm from "../NoteForm/NoteForm";
import NotesContext from "../../Contexts/NotesContext";

function Notes() {
    const searchRef = useRef();
    const [showForm, setShowForm] = useState(false);
    const notectx = useContext(NotesContext);
    const [showListCount, setShowListCount] = useState(notectx.TotalCount);
    const [filteredNotes, setFilteredNotes] = useState(null);
    const [shownotes , updateshownotes] = useState(true)

    function addNoteForm() {
        setShowForm(true);
    }

    const hideFormHandler = () => {
        setShowForm(false);
    }

    const searchHandler = useCallback(() => {
        const searchText = searchRef.current.value;
        if (searchText.trim() === '') {
            setFilteredNotes(null);
            setShowListCount(notectx.TotalCount);
            updateshownotes(true)
        } else {
            const filteredNotes = notectx.NotesList.filter(note =>
                note.Title.includes(searchText)
            );
            setFilteredNotes(filteredNotes);
            setShowListCount(filteredNotes.length);
            updateshownotes(false)
        }
    }, [ notectx.NotesList, notectx.TotalCount]);

    useEffect(() => {
        searchHandler();
    }, [searchHandler]);

    return (
        <div className="notes-container" >
            <div className="notes-box"> 
            <h2>Note Book</h2>
            <p>Search Notes: <input type="text" placeholder="search" ref={searchRef} onChange={searchHandler} /></p>
            <p>Total Notes: {notectx.TotalCount}</p>
            <p>Showing Notes : {showListCount}</p>
            <button onClick={addNoteForm}>Add New Note</button>
            {showForm && <NoteForm show={showForm} hideform={hideFormHandler} />}
            </div>
            
            <div className="notes">
                <h1>Note List</h1>
                {filteredNotes && (
                    <ul>
                        {filteredNotes.map((note, index) => (
                            <li key={index}>{note.Title} - {note.Description}</li>
                        ))}
                    </ul>
                )} { notectx.NotesList &&  shownotes && (<ul>
                    {notectx.NotesList.map((note, index) => (
                        <li key={index}>{note.Title} - {note.Description}</li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    );
}

export default Notes;
