
import { css } from '@emotion/core'
import cross from 'assets/cross.png'

export const wrapperStyle = (showPadding) => css`
    position: relative;
    ${showPadding && 'padding-top: 16px'};
`
export const inputStyle = css`
    height: 40px;
    width: calc(100% - 16px);
    background: #fff;
    font-size: 16px;
    color: #5e6c84;
    padding: 8px;
    margin: 8px;
`

export const crossStyle = css`
    color: #fff;
    width: 12px;
    height: 12px;
    margin: 4px;
    position: absolute;
    right 0;
    top: 0;
    background: url(${cross}) center;
    cursor: pointer;
`

export const bottomButtonStyle = (isAddPlan) => css`
    background: #5aac44;
    color: #fff;
    font-size: 16px;
    ${isAddPlan && addPlanStyle}
`

export const bottomBarStyle = css` 
    width: calc(100% - 16px);
    border-radius: 3px;
    color: #5e6c84;
    margin: 8px;
    padding: 4px 8px;
`

const addPlanStyle = css`
    display: flex;
    justify-content: center;
`