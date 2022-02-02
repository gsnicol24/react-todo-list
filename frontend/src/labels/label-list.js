import { Label } from './label';

export function LabelList(props) {
    var max = props.max;
    return (
        <div>
         {
            props.labels.map(label => <Label label={label} onClick={props.onClick}></Label>)
         }
        </div>
    )
}