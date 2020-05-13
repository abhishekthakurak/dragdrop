import { 
    planItemStyle,
    planCardStyle,
    headerStyle,
    bottomBarStyle
} from 'src/components/DragContainer/style.js'
export default function DragContainer ({ data = {} }) {
    const { title } = data
    return (
        <div css={planItemStyle}>
            <div css={planCardStyle}>
                <label css={headerStyle}>
                    {title}
                </label>
                <button css={bottomBarStyle}>
                + Add a task
                </button>
            </div>
        </div>
    )
}