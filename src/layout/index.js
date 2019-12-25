import React from 'react'
import NavLink from 'umi/NavLink'
import './index.css'
export default function index(props) {
    return (
        <div>
            <NavLink to='/'>首页</NavLink>
            <NavLink to='/welcome'>欢迎页</NavLink>
            <NavLink to='/login'>登录页</NavLink>
            {props.children}
        </div>
    )
}
