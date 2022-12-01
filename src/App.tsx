import { useState } from "react";
import CreateNoteCard from "./components/cards/CreateNoteCard";
import PostCard3 from "./components/cards/PostCard3";
import TailwindLayout1 from "./layouts/tailwindlayout1";

type NoteType = {
  id: string;
  title?: string;
  noteText: string;
  createAt?: Date;
};

const myNotesList = [
  {
    id:"1",
    title:"dummy",
    noteText:"something useful or not ",
    createAt: new Date(),

  }
];
function App() {
  const [notesList, setNotesList] = useState(myNotesList as NoteType[]);

  function handleSubmit(note: NoteType) {
    setNotesList([...notesList, note]);
  }

  function handleDelete(id: string) {
    var lists = notesList.filter((x) => {
      return x.id != id;
    });
    setNotesList(lists);
  }
  return (
    <div className="App">
      <TailwindLayout1 title={""}>
        <CreateNoteCard onSubmit={handleSubmit} />
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-1">
          {notesList.map((val, key) => {
            return (
              <div key={key}>
                <PostCard3 note={val} onDelete={handleDelete} />
              </div>
            );
          })}
        </div>
      </TailwindLayout1>
    </div>
  );
}

export default App;
