import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [condition , setcondition] = React.useState(true)

  const [notes,setNotes] = React.useState({
    title : "",
    content : ""
  });


  function handleChange(event){
    var {name , value} = event.target;
    setNotes((PreVal)=>{
      return{
        ...PreVal,
        [name] : value
      };
    });
  }

  function submitNote(event){
    props.addNote(notes)
    event.preventDefault();
    setNotes({
      title:"",
      content:""
    });
  }


  function start(){
    setcondition(false);
  }


  if(condition){
    return  ( 
    <div>
      <form className="create-note">
        <input onClick={start} placeholder="Take a note..."  />
      </form>
    </div>
    );
  }
  else{
    return (
      <div>
        <form className="create-note">
          <input onChange={handleChange} value={notes.title} name="title" placeholder="Title" />
          <textarea onChange={handleChange} value={notes.content} name="content" placeholder="Take a note..." rows="3" />
          <Zoom in={true}>
            <Fab onClick={submitNote}><AddIcon /></Fab>
          </Zoom>
        </form>
      </div>
    );
  }



}

export default CreateArea;

