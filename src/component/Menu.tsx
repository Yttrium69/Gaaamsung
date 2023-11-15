import Label from "./Label";

interface card_prop {
    label: number;
    title: string;
    tag: string[];
    img_path: string | null;
}

function Menu(props: card_prop): JSX.Element {
    let menu_img: JSX.Element = <div></div>;
    props.img_path ? menu_img =
        <div className="img_container">
            <img src={props.img_path!} alt="product image"></img>
        </div> : <div></div>;
    return (
        <div className="component_menu">
            {menu_img}
            <div className="contents_container">
                <Label label={0}></Label>
                <div className="title">{props.title}</div>
                <div className="tags_container">
                    <div className="tag">#유쾌한</div>
                </div>
            </div>
        </div>
    );
}

export default Menu;