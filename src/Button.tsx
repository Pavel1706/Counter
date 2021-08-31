import React from 'react';

type buttonResType = {
    counterPlus: () => void
    resetInp: () => void
    counter: number
    setCounter: (value: number) => void
}


export function Button(props: buttonResType) {

    function reset() {
        props.resetInp()
    }

    function add() {
        localStorage.setItem('counterValue', JSON.stringify(props.counter))
        props.counterPlus()
    }

    function setLocal() {
        //set value in localStorage
        localStorage.setItem('counterValue', JSON.stringify(props.counter))
    }


    function getLocal() {
        // get value from localStorage

    }

    const ClearLocal = () => {
        localStorage.clear()
        props.setCounter(0)
    }

    function RemoveLocal(){
        localStorage.removeItem('counterValue')
    }

    return (<div>
            <button className='button' onClick={setLocal}>SET</button>
            <button className='button' onClick={getLocal}>GET</button>
            <button className='button' onClick={ClearLocal}>Clear</button>
            <button className='button' onClick={RemoveLocal}>RemoveLocal</button>
            <button className='button' disabled={props.counter === 5}
                    onClick={add}>push me
            </button>
            <button className='button' disabled={props.counter === 0}
                    onClick={reset}>reset
            </button>

        </div>
    )
}