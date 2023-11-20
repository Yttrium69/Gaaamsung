import '../CSS/base.scss';
import $ from 'jquery'

interface card_prop {
    label: number;
    title: string;
    tag: string[];
    img_path: string | null;
    note: any;
    callback: any;
}

function Label(props: { label: number }): JSX.Element {
    let label_text: string = "";
    switch (props.label) {
        case 0: {
            label_text = "Cool scent";
            break;
        }
        case 1: {
            label_text = "Fresh scent";
            break;
        }
        case 2: {
            label_text = "Normal scent";
            break;
        }
        case 3: {
            label_text = "Cosy scent";
            break;
        }
        case 4: {
            label_text = "Flavorful scent";
            break;
        }
    }
    return (
        <div className={"component_label"}>
            <div className={`dot back_label_${props.label}`}></div>
            <div className={`label_text font_label_${props.label}`}>{label_text}</div>
        </div>
    )
}

function Tag(props: { tag_title: string }): JSX.Element {
    return (
        <div className={"component_tag"}>
            {'#' + props.tag_title}
        </div>
    )
}

function Tags_container(props: { tags: string[] }): JSX.Element {
    const tags_in_dom: JSX.Element[] = props.tags.map((title) => <Tag tag_title={title}></Tag>);
    return (
        <div className={"component_tags_container"}>
            {tags_in_dom}
        </div>
    )
}

function Menu(props: any): JSX.Element {
    let menu_img: JSX.Element = <div></div>;
    let style_hide: object;
    props.img_path ? menu_img =
        <div className="product_sample_img">
            <div className="img_container">
                <img src={props.img_path!} alt="product image"></img>
            </div>
        </div>
        : <div className={"product_sample_img"}></div>;
    props.note ? style_hide = { "display": "none" } : style_hide = {}
    return (
        <div className={`component_menu ${props.title}`} onClick={() => { props.callback(props.note, props.title) }}>
            {menu_img}
            <div className="contents_container">
                <Label label={0}></Label>
                <div className="title">{props.title}</div>
                <Tags_container tags={props.tag} />
            </div>
        </div>
    );
}

export default Menu;