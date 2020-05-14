import { 
    editStyle,
    inputStyle
} from 'src/components/TextAndInput/style.js'
import { Fragment, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

export default function TextAndInput({ item, id, planId }) {
    const dispatch = useDispatch()
    const [editEnable, setEditEnable] = useState(false)
    const [text, setText] = useState(item)

    const changeEdit = useCallback(() => {
        setEditEnable(true)
    }, [])

    const handleInputChange = useCallback((event) => {
        setText(event.target.value)
    }, [])

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter' && text) {
            dispatch({
                type: 'TASK_EDIT',
                payload: {
                    id,
                    planItem: text,
                    planId
                }
            })
            setEditEnable(false)
        }
    }, [id, text])


    return (
        <Fragment>
            {editEnable ? (
            <input
                css={inputStyle}
                placeholder='Enter text...'
                value={text}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}/>): 
            <label>{item}</label>
            }
            <span css={editStyle} onClick={changeEdit}>edit</span>
        </Fragment>
    )
}