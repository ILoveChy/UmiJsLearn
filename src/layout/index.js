import React from 'react'
import NavLink from 'umi/NavLink'
import Menu from '@/components/Menu'
export default function index(props) {
    return (
        <div>
            {/* <div>
                <NavLink to="/">首页</NavLink>
                <NavLink to="/a">a页</NavLink>
                <NavLink to="/b">b页</NavLink>
                <NavLink to="/sub">sub页</NavLink>
            </div> */}
            <Menu></Menu>
            {props.children}
            <div><h1>页脚</h1></div>
        </div>
    )
}
