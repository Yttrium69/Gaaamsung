import React from 'react';
import { saveAs } from 'file-saver';
import notes from '../assets/notes.json'


function Admin(): JSX.Element {
    // const saveJsonToFile = () => {
    //     const jsonData = {
    //         key1: 'value1',
    //         key2: 'value2',
    //         key3: 'value3',
    //     };

    //     const jsonString = JSON.stringify(jsonData, null, 2);
    //     const blob = new Blob([jsonString], { type: 'application/json' });

    //     saveAs(blob, 'data.json');
    // };


    return (
        <div>
            {notes[0].name}
        </div>
    );
}

export default Admin;