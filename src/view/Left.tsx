import React from 'react';
import Menu from '../component/Menu';
function Left(): JSX.Element {
    return (
        <div className="sect_left">
            <div className='perfume_liquid_pack'>
                <div className='img_container'>
                    <img src='img/perfue.png'></img>
                </div>
                <div className='selected_liquid_container'>
                    <div className='top'></div>
                    <div className='middle'></div>
                    <div className='base'></div>
                </div>
            </div>
            <div className='cards_container'>
                <div className='card_top'>
                    <img className='top_arrow' src='img/main/top_arrow.png'></img>
                    <Menu label={0} title={'Citrus'} tag={["유쾌한", "귀여운"]} img_path={null}></Menu>
                </div>
                <div className='card_middle'>
                    <img className='top_arrow' src='img/main/top_arrow.png'></img>
                    <Menu label={0} title={'Citrus'} tag={["유쾌한", "귀여운"]} img_path={null}></Menu>
                </div>
                <div className='card_middle'>
                    <img className='top_arrow' src='img/main/top_arrow.png'></img>
                    <Menu label={0} title={'Citrus'} tag={["유쾌한", "귀여운"]} img_path={null}></Menu>
                </div>
            </div>
        </div>
    );
}

export default Left;
