import Notes from './Components/Notes/Notes';
import './App.css';
import NotesContextProvider from './Contexts/NotesContextProvider';

function App() {
  return <div>
<NotesContextProvider>
<Notes/>
</NotesContextProvider>
       

   
  </div>
}

export default App;
