import React, { useState, useEffect } from 'react';
import Menu from '../component/Menu';
import notes from '../assets/notes.json';
import SSketch from '../component/sketch';


function search_note(name: string) {
    const target_note = notes.filter(note => note.name == name);

    if (target_note.length == 0) return null;
    return target_note[0];
}

function Menu_left(props: { name: string, callback: any, note: string }) {
    let target = search_note(props.name);
    if (target == null)
        return (<div style={{ display: "none" }} className='component_menu_left' />)
    else {
        return (<div className={`component_menu_left ${props.note}`}>
            <img className={`${props.note}_arrow`} src={`img/main/arrow_${props.note}.svg`}></img>
            <Menu callback={props.callback} label={target.label} title={target.name} tag={target.tags} note={props.note} img_path={null} />
        </div>);
    }
}


function Left(props: any): JSX.Element {
    return (
        <div className="sect_left">
            <SSketch />
            {/* <div className='perfume_liquid_pack'>
                <div className='img_container'>
                    <img src='img/main/perfume.png'></img>
                </div>
                <div className='selected_liquid_container'>
                    <div className={`top ${search_note(props.top)!=null?"back_label_"+search_note(props.top)?.label:"transperent"}`}></div>
                    <div className={`middle ${search_note(props.middle)!=null?"back_label_"+search_note(props.middle)?.label:"transperent"}`}></div>
                    <div className={`base ${search_note(props.base)!=null?"back_label_"+search_note(props.base)?.label:"transperent"}`}></div>
                </div>
            </div>
            <div className='cards_container'>
                <div className='card top'>
                    <Menu_left name={props.top} callback={props.callback} note={"top"} />
                </div>
                <div className='card middle'>
                    <Menu_left name={props.middle} callback={props.callback} note={"middle"} />
                </div>
                <div className='card base'>
                    <Menu_left name={props.base} callback={props.callback} note={"base"} />
                </div>
            </div> */}
        </div>

    );
}

export default Left;
