import { Label } from './label';

export function LabelList(props) {
    const max = props.max;
    return (
        <div>
            {
                props.labels.map(
                    (label, idx) => {
                        if (!max || idx < max)
                            return <Label label={label} onClick={props.onClick}></Label>
                        if (max === idx.toString()) {
                            return <Label label={{
                                name: `+${props.labels.length - max} more`,
                                color: props.labels[max].color
                            }} />
                        }
                        return <></>
                    })
            }
        </div>
    )
}