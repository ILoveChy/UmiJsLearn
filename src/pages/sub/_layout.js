import React from 'react'

export default function layout(props) {
    return (
        <div>
            <h1>这是sub页面的通用子菜单</h1>
            {props.children}
        </div>
    )
}
