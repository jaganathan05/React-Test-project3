import React from "react";

const NotesContext = React.createContext({
    NotesList : [],
    TotalCount: 0,
    addnote : ()=>{}

})




export default NotesContext