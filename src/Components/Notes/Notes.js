import React,{useContext, useState} from "react";
import './Notes.css'
import NoteForm from "../NoteForm/NoteForm";
import NotesContext from "../../Contexts/NotesContext";
function Notes(){
    const [showform , setshowform ] = useState(false)
    const notectx = useContext(NotesContext)
    console.log(notectx.NotesList)
    function addnoteform (){

        setshowform(true)
    }
    const hideformhandler = ()=>{
        setshowform(false)
    }
return <div> 
    <div className="notepage">
    <h2>Note Book</h2>
    <p>Search Notes: <input type="text" placeholder="search"></input> </p>
    <p>Total Notes: {0}</p>
    <p>Showing Notes : {1}</p>
    <button onClick={addnoteform}>Add New Note</button>
    {showform && <NoteForm show={showform} hideform={hideformhandler}/>}
</div>
<div>
    <h1>Note List</h1>
    
</div> </div> 

}
export default Notes;