import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import Note from './Note';


const CreateNote = (props)=>{
    const [Note,setNote] = useState({
        Title : '',
        content : '',
    });

    const [expand,setExpand] = useState(false);
    const inputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;

        const {name,value} = event.target;
       
        setNote((oldValue) => {
            return {
                ...oldValue,
                [name] : value,
            };
        });
        // console.log(Note);
    };

    const expandIt = () =>{
        setExpand(true);
    };
    const backtoNormal = () =>{
        setExpand(false);
    };

    const addEvent = () =>{
        props.passNote(Note);
        setNote({
            Title:"",
            content : "",
        });
    };
    return(

        <>
           <div className="main_note" onDoubleClick={backtoNormal}>
               <form>
               {expand ?
                   <input type="text" 
                   value={Note.Title}
                   name="Title"
                    onChange={inputEvent} 
                    placeholder="Title"
                    autoComplete="off" 
                    /> : null}

                   <textarea rows="" column=""
                   value={Note.content}
                   name="content"
                    onChange={inputEvent} 
                    placeholder="write a note" onClick={expandIt}
                    >
                    </textarea>

                    {expand ?
                   <Button  color="primary" onClick={addEvent}> 
                   <AddIcon className="plus_sign"/>
                    </Button> : null}              
               </form>
           </div>
        </> 
    );
};

export default CreateNote;