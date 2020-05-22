import { 
    planItemStyle,
    planCardStyle,
    headerStyle,
    bottomBarStyle
} from 'src/components/DragContainer/style.js'
import DragItem from 'src/components/DragItem/index.js'
import AddableButton from 'src/components/AddableButton'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
export default function DragContainer ({ data = {}, id }) {
    const { title, planItems } = data
    const dispatch = useDispatch()
    
    const onApply = useCallback((planItem) => dispatch({
        type: 'ADD_TASK',
        payload: {
            id,
            planItem
        }
    }), [id])

    const handleOnDrop = useCallback(({newPlanId, event}) => {
        event.stopPropagation()
        const planId = event.dataTransfer.getData('planId')
        const taskId = event.dataTransfer.getData('taskId')
        dispatch({
            type: 'MOVE_TASK_ACROSS_PLAN',
            payload: {
                planId,
                newPlanId,
                taskId
            }
        })
    }, [])

  // this can be used to do things when an item is been dragged
    const handleOnDragOver = useCallback((event) => {
        event.preventDefault() // do not allow browser to do default things
    }, [])

    return (
        <div css={planItemStyle}>
            <div css={planCardStyle} 
                onDrop={(event) => handleOnDrop({newPlanId: id, event})}
                onDragOver={handleOnDragOver}
            >
                <label css={headerStyle}>
                    {title}
                </label>
                <DragItem planItems={planItems} planId={id}/>
                <AddableButton style={bottomBarStyle} buttonTitle='+' onApply={onApply} />
            </div>
        </div>
    )
}