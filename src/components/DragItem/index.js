import { 
    itemStyle,
} from 'src/components/DragItem/style.js'
import TextAndInput from 'components/TextAndInput/index.js'

export default function DragItem ({ planItems, planId }) {
    
    return (
        <div>
            {planItems.map((item, index) => (
                <div css={itemStyle} key={index}>
                    <TextAndInput item={item} id={index} planId={planId} />
                </div>
            ))}
        </div>
    )
}
