import React, {ChangeEvent, useEffect, useState} from "react";
import {Container, Grid, Paper} from "@material-ui/core";

type InputType = {
    SetMinCounter: (value: number) => void
    SetMaxCounter: (value: number) => void
    setCounter: (value: number) => void
    counter: number
    minCounter: number
    maxCounter: number
    SetError: (text:string)=> void
    error:string
    setCondition: (value:boolean)=> void
    condition: boolean
}

export function Input(props: InputType) {


    function onChangeInputMax(e: ChangeEvent<HTMLInputElement>) {
        props.SetError('Push button Set')
        props.setCondition(false)
        props.SetMaxCounter(+e.currentTarget.value)
        // Comprasion()
        console.log(+e.currentTarget.value)
    }

    function onChangeInputMin(e: ChangeEvent<HTMLInputElement>) {
        props.SetError('Push button Set')
        props.setCondition(false)
        props.SetMinCounter(+e.currentTarget.value)

        console.log(+e.currentTarget.value)
    }


    useEffect(() => {
        console.log('hey')
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.SetMinCounter(newValue)
        }
    }, [])
    useEffect(() => {
        console.log('hey')
        let valueAsString = localStorage.getItem('counterValueMax')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.SetMaxCounter(newValue)
        }
    }, [])

    return (<div>

        <Grid item>
            <Paper style={{padding: "20px"}}>

                <div className='text'>max value:<input value={props.maxCounter} type='number'
                                                       onChange={onChangeInputMax}/></div>
                <div className='text'>start value:<input value={props.minCounter} type='number'
                                                         className={props.error ? 'error' : ''}
                                                         onChange={onChangeInputMin}/></div>

                <h1 className={props.counter === props.maxCounter ? 'red' : ''}>{props.error ? props.error : props.counter}</h1>
            </Paper>
        </Grid>

    </div>)
}