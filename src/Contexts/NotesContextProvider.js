import React, { useState ,useEffect} from "react"
import NotesContext from "./NotesContext"

function NotesContextProvider (props){
const [data ,setData] = useState(null)
const [count,setcount] = useState(0)
const [addnote,setaddnote] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://react-api-test-d5c70-default-rtdb.firebaseio.com/Notes.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            const notesArray = Object.values(jsonData)
            setData(notesArray);
            setcount (notesArray.length)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [addnote]);

      const addnotehandler = () =>{
        setaddnote(true)
      }


    const notevalues = { 
        NotesList : data,
        TotalCount : count,
        addnote : addnotehandler

    }
    console.log(notevalues)

    return <NotesContext.Provider value={notevalues}>{props.children}</NotesContext.Provider>

}

export default NotesContextProvider;