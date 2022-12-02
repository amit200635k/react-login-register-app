import React from 'react'

export default function ChildComponent(props) {
    return (
        <div className='container'>
            {props.name}
             {/* { JSON.stringify(props.data)}  */}
        </div>
    )
}
