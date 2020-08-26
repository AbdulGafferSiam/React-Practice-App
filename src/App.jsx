import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
    const [items, setItems] = useState([]);

    const addNote = (note) => {
        if(note.title==="" || note.content==="") {
            return;
        }
        setItems((prevItems) => {
            return [...prevItems, note];
        });
    }

    const btnDeleteItem = (id) => {
        setItems((prevItems) => 
            prevItems.filter((item, index) => {
                return id !== index;
            })
        );
    }

    return (
        <>
            <Header /> 
            <CreateNote passNote={ addNote } />

            {
                items.map((item, index) => {
                    return (<>
                        <Note
                            key={index}
                            id={index}
                            title={item.title}
                            content={item.content}
                            onSelect={btnDeleteItem} />
                    </>);
                })
            }

            <Footer />
        </>
    );
}

export default App;