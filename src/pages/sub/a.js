import React from 'react'
import router from 'umi/router'

export default function a() {
    return (
        <div>
            <h1>a页面</h1>
            <button onClick={() => {
                router.push('../b')
            }}>跳转到b页面</button>
        </div>
    )
}
