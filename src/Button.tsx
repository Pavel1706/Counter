import React, { useEffect } from 'react';
import {Grid, Paper} from "@material-ui/core";


type buttonResType = {
    counterPlus: () => void
    resetInp: () => void
    counter: number
    setCounter: (value: number) => void
    maxCounter:number
    minCounter:number
    setError: (value:string)=> void
    condition: boolean
    error:string
    setCondition: (value:boolean)=> void
}


export function Button(props: buttonResType) {

    function reset() {
        props.resetInp()
    }

    function add() {
        props.counterPlus()
    }
    function setLocal() {
        props.setCounter(props.minCounter)
        props.setError('')
        props.setCondition(true)
    }

    return (<div>

        <Grid item >
            <Paper style = {{padding:"20px"} }>
                <button className='button' onClick={setLocal}
                        disabled={props.condition}>SET
                </button>
            <button className='button' disabled={props.error==='Push button Set'||props.counter===props.maxCounter}
                    onClick={add}>push me
            </button>
            <button className='button' disabled={props.error==='Push button Set'}
                    onClick={reset}>reset
            </button>
            </Paper>
        </Grid>
        </div>
    )
}