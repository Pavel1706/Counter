import React, { useEffect } from 'react';
import {Grid, Paper} from "@material-ui/core";

type buttonResType = {
    counterPlus: () => void
    resetInp: () => void
    counter: number
    setCounter: (value: number) => void
    maxCounter:number
    minCounter:number
}


export function Button(props: buttonResType) {

    function reset() {
        props.resetInp()
    }

    function add() {
        // localStorage.setItem('counterValue', JSON.stringify(props.counter))
        props.counterPlus()  }

        //set value in localStorage
        // localStorage.setItem('counterValue', JSON.stringify(props.counter))


    function getLocal() {
        // get value from localStorage

    }

    const ClearLocal = () => {
        localStorage.clear()
        props.setCounter(0)
    }

    function RemoveLocalItem(){
        localStorage.removeItem('counterValue')
    }

    return (<div>

        <Grid item >
            <Paper style = {{padding:"20px"} }>
            <h1 className={props.counter===props.maxCounter ? 'red' : ''} >{props.counter}</h1>
            <button className='button' disabled={props.counter === 0 || props.counter===props.maxCounter}
                    onClick={add}>push me
            </button>
            <button className='button' disabled={props.counter === 0}
                    onClick={reset}>reset
            </button>
            </Paper>
        </Grid>
        </div>
    )
}