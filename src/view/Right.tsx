import React, {useState, useEffect} from 'react';
import Menu from '../component/Menu';
import notes from '../assets/notes.json';
// import { useMediaQuery } from 'react-responsive'
import $ from 'jquery';


function Notes(props: { note: string, callback: any }): JSX.Element {
    const note_json: { name: string, label: number, tags: string[], note: string }[] = notes.filter(target_note => target_note.note == props.note);
    const note_elements: JSX.Element[] = note_json.map((note_json): JSX.Element => <Menu callback={props.callback} label={note_json.label} title={note_json.name} tag={note_json.tags} note={props.note} img_path={`img/note/${note_json.name}.png`} />)
    return (<div className={`component_notes ${props.note}`} >
        <div className='text_icon_pack'>
            <p className='text'>{props.note.charAt(0).toUpperCase() + props.note.slice(1)} Note</p>
            <div className='icon_container'>
                <img src='/img/icon/icon_help.svg' alt='help icon'></img>
            </div>
        </div>
        <div className='item_container'>
            {note_elements}
        </div>
    </div>);
}

function is_everynotes_selected(top:string|null, middle:string|null, base:string|null){
    return top!=null&&middle!=null&&base!=null;
}


function Right(props: any): JSX.Element {
    // const isDesktopOrMobile = useMediaQuery({query: '(max-width:500px)'});

    const buttons = {
        true: <button className='button_order true' onClick={()=>{alert("주문이 완료되었습니다. 감사합니다")}}>주문하기</button>,
        false:<button className='button_order false' onClick={()=>{alert("3가지 재료를 모두 선택하세요.")}}>주문하기</button>,
        mobile:<button className='button_order false' onClick={()=>{alert("PC 버전에서 이용 가능한 기능입니다. PC 버전에서 더 많은 기능을 만나 보세요!")}}>주문하기</button>
    }
    let button_to_show:JSX.Element;
    
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
      const resizeListener = () => {
        setInnerWidth(window.innerWidth);
      };
      window.addEventListener("resize", resizeListener);
    });

    is_everynotes_selected(props.top, props.middle, props.base)?
    button_to_show = buttons.true:button_to_show = buttons.false;

    if(innerWidth<=500){
        button_to_show = buttons.mobile;
    }

    

    return (
        <div className="sect_right">
            <div className='scroll_shader_top' />

            <div className='menus_container'>

                <div className="texts_container">
                    <div className='title'>나만의 향수<br />레시피를 선택하세요.</div>
                    <div className='dscrpt'>아래에서 취향에 맞는 향수 재료를 선택할 수 있어요.<br />나만의 조합으로 개성을 표현해 보세요.</div>
                </div>
                <Notes callback={props.callback} note='base' />
                <Notes callback={props.callback} note='middle' />
                <Notes callback={props.callback} note='top' />

            </div>
            <div className='scroll_shader_bottom' />
            <div id='btn' className='btn_container'>
                {button_to_show}
            </div>

        </div >
    );
}

export default Right;
