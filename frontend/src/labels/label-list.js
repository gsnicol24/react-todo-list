import { Label } from './label';

export function LabelList(props) {
    const max = props.max;
    const labels = props.labels ?? []
    return (
        <div>
            {
                labels.map(
                    (label, idx) => {
                        if (!max || idx < max)
                            return <Label label={label} onClick={props.onClick}></Label>
                        if (max === idx.toString()) {
                            return <Label label={{
                                name: `+${labels.length - max} more`,
                                color: labels[max].color
                            }} />
                        }
                        return <></>
                    })
            }
        </div>
    )
}