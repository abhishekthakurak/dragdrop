import { 
    itemStyle,
} from 'src/components/DragItem/style.js'
import TextAndInput from 'components/TextAndInput/index.js'
import { useCallback, Fragment } from 'react'
import { useDispatch } from 'react-redux'

export default function DragItem ({ planItems, planId }) {
    const dispatch = useDispatch()
    
    const handleDragStart = useCallback(({event, planId, index}) => {
        event.dataTransfer.setData('planId', planId)
        event.dataTransfer.setData('taskId', index)
    }, [])

    const handleOnDrop = useCallback(({newTaskId, event}) => {
        const planId = event.dataTransfer.getData('planId')
        const taskId = event.dataTransfer.getData('taskId')
        dispatch({
            type: 'MOVE_TASK_WITHIN_PLAN',
            payload: {
                currentPlanId: planId,
                newTaskId,
                prevTaskId: taskId
            }
        })
    }, [])

    return (
        <Fragment>
            {planItems.map((item, index) => (
                <div css={itemStyle} key={index} draggable='true'
                    onDragStart={(event) => handleDragStart({event, planId, index})}
                    onDrop={(event) => handleOnDrop({newTaskId: index, event})}
                    >
                    <TextAndInput item={item} id={index} planId={planId} />
                </div>
            ))}
        </Fragment>
    )
}
