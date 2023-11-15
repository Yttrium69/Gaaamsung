interface label_props {
    label: number;
}

function Label(props: label_props): JSX.Element {
    let label_name: string = "";
    let label_color: string = "";

    switch (props.label) {
        case 0: {
            label_name = "Cool scent";
            label_color = "#244AFB";
        }
    }

    return (
        <div className="component_label">
            <div style={{ backgroundColor: label_color }} className="dot">

            </div>
            <div style={{ color: label_color }} className="text">
                {label_name}
            </div>
        </div>
    )
}

export default Label;