import './label.css'

export function Label(props) {
    const style = {
        backgroundColor: props.label.color,
        cursor: props.onClick ? "pointer" : ""
    }

    const onClickFunction = props.onClick ? props.onClick: (label) => { }

    return (
        <span
            key={props.label._id}
            className="label"
            style={style}
            onClick={() => onClickFunction(props.label)}
            >
            {props.label.name}
        </span>
    )
}