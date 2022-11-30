import CreateNoteCard from "./components/cards/CreateNoteCard";
import PostCard3 from "./components/cards/PostCard3";
import TailwindLayout1 from "./layouts/tailwindlayout1";

function App() {
  return (
    <div className="App">
      <TailwindLayout1 title={""} >
     
     
     
        <CreateNoteCard/>

       <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-1">
         <PostCard3 />
         <PostCard3 />
         <PostCard3 />
         <PostCard3 />
       </div>
      
     </TailwindLayout1>

      
    </div>
  );
}

export default App;
