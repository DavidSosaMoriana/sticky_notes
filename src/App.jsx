import NotesPage from "./pages/NotesCard";
import NoteProvider from "./context/NoteContext";

function App() {
  return (
    <div id="App">
      <NoteProvider>
        <NotesPage />
      </NoteProvider>
    </div>
  );
}

export default App;
