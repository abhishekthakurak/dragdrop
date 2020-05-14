import { 
    addPlanWrapStyle,
    wrapperStyle,
} from 'src/pages/home/style.js'
import { useSelector, useDispatch } from 'react-redux'
import DragContainer from 'components/DragContainer/index.js'
import AddableButton from 'components/AddableButton/index.js'
import { useCallback } from 'react'

function Home () {
    const { plans } = useSelector(({ planner: { plans = [] } }) => ({ plans }))
    const dispatch = useDispatch()
    
    const onApply = useCallback((planValue) => dispatch({
        type: 'ADD_PLAN',
        payload: {
            title: planValue,
            planItems: []
        }
    }), [])
    return (
        <div css={wrapperStyle}>
            {plans.map((data, index) => {
                return  <DragContainer data={data} key={index} id={index} />
            })}
            <div css={addPlanWrapStyle}>
                <AddableButton onApply={onApply} buttonTitle='+ Add another plan'/>
            </div>
        </div>
    )
}

export default Home