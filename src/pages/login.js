/**
 * title: 登录页
 * Routes:
 *  - ./src/routes/HandleTitle.js
 */

import React, { useRef } from 'react'


export default function login({ history }) {
    const txtLoginId = useRef()
    const txtLoginPwd = useRef()
    return (
        <div>
            <p>
                账号:<input ref={txtLoginId} type="text" />
            </p>
            <p>
                密码:<input ref={txtLoginPwd} type="password" />
            </p>
            <p>
                <button onClick={() => {
                    if (txtLoginPwd.current.value === "123123") {
                        //登陆成功
                        //保存账号
                        localStorage.setItem("loginId", txtLoginId.current.value)
                        history.push('/welcome');
                    } else {
                        alert('账号或密码错误')
                    }
                }}>登陆</button>
            </p>
        </div>
    )
}
