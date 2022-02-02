import './label.css'

export function Label(props) {
    const style = {
        backgroundColor: props.label.color,
        cursor: props.onClick ? "pointer" : ""
    }

    return (
        <span
            key={props.label._id}
            className="label"
            style={style}
            onClick={props.onClick}
            >
            {props.label.name}
        </span>
    )
}