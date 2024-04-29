import React, { useState ,useEffect} from "react"
import NotesContext from "./NotesContext"

function NotesContextProvider (props){
const [data ,setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://crudcrud.com/api/7109fa7396804d2c8538f9fcd65ec16a');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);



    const notevalues = { 
        NotesList : data

    }
    console.log(notevalues)

    return <NotesContext.Provider value={notevalues}>{props.children}</NotesContext.Provider>

}

export default NotesContextProvider;