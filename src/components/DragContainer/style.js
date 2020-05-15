
import { css } from '@emotion/core'

export const planItemStyle = css`
    width: 270px;
    margin: 8px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
`

export const planCardStyle = css`
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
`

export const headerStyle = css`
    padding: 10px 8px;
    min-height: 20px;
    padding-right: 36px;
`

export const bottomBarStyle = css` 
    width: calc(100% - 16px);
    margin: 8px;
    background: #fff;
    .button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        float: right;  
    }
`
