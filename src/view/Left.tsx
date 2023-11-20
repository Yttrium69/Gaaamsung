import React, { useState, useEffect } from 'react';
import Menu from '../component/Menu';
import notes from '../assets/notes.json';


function Selected(name: string) {
    return (<div className='component_selected'>

    </div>);
}
function Left(props: any): JSX.Element {

    return (
        <div className="sect_left">
            <div>{props.base}</div>
            <div className='perfume_liquid_pack'>
                <div className='img_container'>
                    <img src='img/main/perfume.png'></img>
                </div>
                {/* <div className='selected_liquid_container'>
                    <div className='top'></div>
                    <div className='middle'></div>
                    <div className='base'></div>
                </div> */}
            </div>
            <div className='cards_container'>
                <div className='card_top'>
                    <img className='top_arrow' src='img/main/arrow_top.svg'></img>
                    <Menu note={null} label={0} title={'Citrus'} tag={["유쾌한", "귀여운"]} img_path={null}></Menu>
                </div>
                <div className='card_middle'>
                    <img className='top_arrow' src='img/main/arrow_middle.svg'></img>
                    <Menu note={null} label={0} title={'Citrus'} tag={["유쾌한", "귀여운"]} img_path={null}></Menu>
                </div>
                <div className='card_base'>
                    <img className='top_arrow' src='img/main/arrow_base.svg'></img>
                    <Menu note={null} label={0} title={'Citrus'} tag={["유쾌한", "귀여운"]} img_path={null}></Menu>
                </div>
            </div>
        </div>
    );
}

export default Left;
