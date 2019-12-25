import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <p>
                {props.match.params.name}
            </p>
            <p>
                {props.match.params.id}
            </p>
        </div>
    )
}
