import React from 'react';
import Menu from '../component/Menu';
function Right(): JSX.Element {
    return (
        <div className="sect_right">
            <div className="texts_container">
                <div className='title'>나만의 향수<br />레시피를 선택하세요.</div>
                <div className='dscrpt'>아래에서 취향에 맞는 향수 재료를 선택할 수 있어요.<br />나만의 조합으로 개성을 표현해 보세요.</div>
            </div>
            <div className='title_menu_pack'>
                <div className='text_icon_pack'>
                    <p className='text'>Base Note</p>
                    <div className='icon_container'>
                        <img src='/img/icon/icon_help.svg' alt='help icon'></img>
                    </div>
                </div>
                <div className='menu_container'>
                    <Menu label={0} title={'Citrus'} tag={["유쾌한", "귀여운"]} img_path={"img/icon/citrus.png"}></Menu>
                </div>
            </div>
            <button className='button_order'>주문하기</button>
        </div >
    );
}

export default Right;
