import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import CreateNote from './CreateNote';
import Notes from './Note'

const App = ()=>{
    const [addItem , setItem] = useState([]);
    const addNote = (noteItem) =>{
        // alert("clicked");
        setItem((oldData) => {
            return [...oldData,noteItem];
        });
        console.log(noteItem);

    };

    const onDelete = (id) => {
        setItem((oldItem) => 
            oldItem.filter((currData,idx) => {
                return idx !== id;
            })
        );
    };

    return(
        <>
            <Header/>
            <CreateNote  
            passNote = {addNote}/>
            

            { addItem.map((val,index) => {
                return <Notes
                    key={index}
                    id={index}
                    title = {val.Title}
                    content = {val.content}
                    deleteItem = {onDelete}
                />
            }) }
            <Footer/>
        </>
    );
};

export default App;
