import React from 'react'
import NavLink from 'umi/NavLink'
import router from 'umi/router'

export default function Menu(props) {
    return (
        <div>
            <NavLink to="/">首页</NavLink>
            /
            <NavLink to="/a">a页</NavLink>
            <button onClick={() => {
                router.push('/b')
            }}>b页面</button>
        </div>
    )
}
