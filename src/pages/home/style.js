
import bgScreen from 'assets/background.jpeg'
import { css } from '@emotion/core'

export const wrapperStyle = css`
    height: 100%;
    background: url(${bgScreen}) center;
    background-size: cover;
    overflow-x: auto;
    white-space: nowrap;
`

export const bottomBarStyle = css` 
    width: calc(100% - 16px);
    border-radius: 3px;
    color: #5e6c84;
    margin: 8px;
    padding: 4px 8px;
`

export const buttonColor = css`
    background: #5aac44;
    color: #fff;
    font-size: 16px;
`

export const addPlanWrapStyle = css`
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 3px;
    padding: 4px;
    width: 270px;
    margin: 8px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
`