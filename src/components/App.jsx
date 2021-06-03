import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [Notes , SetNotes] = React.useState([]);
  

  function AddNotes(note){
    SetNotes((preVal)=>{
      return [...preVal,note];
    });
  }

  function deleteItems(id){
    SetNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={AddNotes} />
      {Notes.map((e,index)=>{
          return <Note key={index} onDone={deleteItems} id={index} title={e.title} content={e.content} />
      })}

      <Footer />
    </div>
  );
}

export default App;

//dhd