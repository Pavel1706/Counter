import React, {ChangeEvent, useEffect} from "react";

type InputType = {
    setCounter: (value:number)=>void
    counter: number
}

export function Input(props: InputType) {

    useEffect(()=> {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setCounter(newValue)
        }
    },[])


    useEffect(()=> {
        localStorage.setItem('counterValue', JSON.stringify(props.counter))
    },[props.counter])


    function onChangeInput(e:ChangeEvent<HTMLInputElement>){
        props.setCounter(+e.currentTarget.value)

    }


    return (<div>
    <span className='text'>max value:<input type='number' onChange={onChangeInput}/></span>
    <span className='text'>start value:<input type='number'/></span>
    </div>)
}