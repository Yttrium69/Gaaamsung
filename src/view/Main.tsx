import React, { useState } from 'react';
import Right from './Right';
import Left from './Left'
import '../CSS/main.scss';

interface selected_notes { "base": string | null, "middle": string | null, "top": string | null };

function Main(): JSX.Element {

    const [selected, setSelected] = useState<selected_notes>({
        base: null,
        middle: null,
        top: "null",
    });


    function update_selected_item(note: "base" | "middle" | "top" | null, item: string): void {
        let now_selected: selected_notes = { ...selected };
        now_selected[note!] = item;
        setSelected(now_selected);
        // console.log(item);
        // console.log(selected);
    }

    function gogo_callback(target: any) {
        console.log(target);
    }



    return (
        <div className="page_main">
            <Left callback={update_selected_item} top={selected.top} middle={selected.middle} base={selected.base} />
            <Right  top={selected.top} middle={selected.middle} base={selected.base}  callback={update_selected_item} />
        </div>
    );
}

export default Main;
