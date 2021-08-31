import React from 'react';

type faceType = {
    counter: number
}

export function Count(props: faceType) {
    return (
        <div className='face'>
            <h1 className={props.counter > 4 ? 'red' : ''}>{props.counter}</h1>
        </div>
    )
}