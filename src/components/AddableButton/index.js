import { useState, useCallback, Fragment } from 'react'
import { 
    bottomBarStyle,
    bottomButtonStyle,
    inputStyle,
    crossStyle,
    wrapperStyle
} from 'src/components/AddableButton/style.js'

export default function AddableButton ({ onApply, buttonTitle, style }) {
    const [addPlan, setAddPlan] = useState(false)
    const [planValue, setPlanValue] = useState('')

    const inputChange = useCallback((value) => setPlanValue(value), [])

    const changeAddPlan = useCallback((event, value) => {
        event.stopPropagation()
        setPlanValue('')
        setAddPlan(value)
    }, [])

    const handleAdd = useCallback((event, { planValue }) => {
        addPlan ? onApply(planValue) : changeAddPlan(event, true)
        setPlanValue('')
    }, [changeAddPlan, addPlan])

    const handleKeyDown = useCallback((event) => {
        if(event.key == 'Enter' && planValue) {
            onApply(planValue)
            setPlanValue('')
            setAddPlan(false)
        }
    }, [planValue, onApply])
    return (
        <div css={[wrapperStyle(addPlan), style]}>
            {addPlan &&
            (<Fragment>
                <div css={crossStyle} onClick={(event) => changeAddPlan(event, false)}/>
                <input 
                    className='input'
                    css={inputStyle}
                    placeholder='Enter text...'
                    onChange={(event) => inputChange(event.target.value)}
                    value={planValue}
                    onKeyDown={handleKeyDown}
                />
            </Fragment>
            )}
            <button
                className='button'
                css={[bottomBarStyle, bottomButtonStyle(addPlan)]}
                onClick={(event) =>  handleAdd(event, { planValue })}>
                {buttonTitle}
            </button>
        </div>
    )
}