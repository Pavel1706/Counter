import React, {ChangeEvent, useEffect, useState} from "react";
import {Container, Grid, Paper} from "@material-ui/core";

type InputType = {
    SetMinCounter: (value: number) => void
    SetMaxCounter: (value: number) => void
    setCounter: (value: number) => void
    counter: number
    minCounter: number
    maxCounter: number

}

export function Input(props: InputType) {

    const [error, SetError] = useState<string>('')



    function onChangeInputMax(e: ChangeEvent<HTMLInputElement>) {
        props.SetMaxCounter(+e.currentTarget.value)
        // Comprasion()
        console.log(+e.currentTarget.value)
    }

    function onChangeInputMin(e: ChangeEvent<HTMLInputElement>) {

        props.SetMinCounter(+e.currentTarget.value)
        // Comprasion()
        console.log(+e.currentTarget.value)
    }

    function Comprasion(){
        if(props.minCounter === props.maxCounter){
            console.log(props.minCounter)
            console.log(props.maxCounter)
            SetError('it isn`t correct')
        }
        if(props.minCounter!==props.maxCounter){
            SetError('')
        }
    }

    function setLocal() {
        props.setCounter(props.minCounter)
        SetError('')
    }


    useEffect(()=> {
        console.log('hey')
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.SetMinCounter(newValue)
        }
    },[])
    useEffect(()=> {
        console.log('hey')
        let valueAsString = localStorage.getItem('counterValueMax')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.SetMaxCounter(newValue)
        }
    },[])

    return (<div>

        <Grid item>
            <Paper style={{padding: "20px"}}>
                <div className='text'>max value:<input value={props.maxCounter} type='number' onChange={onChangeInputMax} /></div>
                <div className='text'>start value:<input value={props.minCounter}type='number' className={error? 'error': ''}
                                                         onChange={onChangeInputMin}/></div>
                <button className='button' onClick={setLocal}
                        disabled={props.minCounter < 0} >SET</button>
            </Paper>
        </Grid>
        <div className='error'>{error}</div>
    </div>)
}