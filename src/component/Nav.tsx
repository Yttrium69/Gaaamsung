function Nav_right(right_elements:any) {
    right_elements = [{text:"About US", link:"/about"}, {text:"Order", link:"/order"}];
    return (right_elements.map((element:any) => (<div className="right_element" style={{cursor:"pointer"}} onClick={() => { window.location.href = element.link }}>{element.text}</div>)));
}

function Nav(props: { left: { "text": string | null, "link": string | null, "img": { "src": string, "width": string } | null }, right: { text: string, link: string }[] | null }): JSX.Element {
    return (
        <div className="component_nav">
            <div className="left_right_pack"> <div className="left">
                <div style={{ width: props.left.img?.width }} onClick={() => { window.location.href = '/' }} className="logo_container logo">
                    <img style={{ width: "100%", height: "100%" }} src={props.left.img?.src}></img>
                </div>
            </div>
                <div className="right">
                    <Nav_right right_elements={props.right} />
                </div></div>

        </div>
    )
}

export default Nav;