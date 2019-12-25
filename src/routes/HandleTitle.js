import React from 'react'

export default function HandleTitle(props) {
    document.title = props.route.title
    return (
        <div>
            <h1>HandleTitle</h1>
            {props.children}
        </div>
    )
}
