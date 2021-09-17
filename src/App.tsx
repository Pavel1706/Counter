import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './Button';
import {Input} from "./Input";
import {Grid} from '@material-ui/core';


function App() {
    const [counter, setCounter] = useState(0)
    let [minCounter, SetMinCounter] = useState(0)
    let [maxCounter, SetMaxCounter] = useState(0)
    const [error, SetError] = useState<string>('Push button Set')
    const [condition, setCondition] = useState<boolean>(false)

    function counterAdd() {
        if (counter !== maxCounter) {
            setCounter(counter + 1)
        }
        if (counter === maxCounter) {

        }
    }

    function resetInp() {
        setCounter(minCounter)
    }

    useEffect(() => {
        console.log('hey')
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(minCounter))
    }, [minCounter])

    useEffect(() => {
        localStorage.setItem('counterValueMax', JSON.stringify(maxCounter))
    }, [maxCounter])


    return (
        <div className='tablo'>

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>

                    <Input SetMinCounter={SetMinCounter} counter={counter}
                           setCounter={setCounter}
                           SetMaxCounter={SetMaxCounter}
                           minCounter={minCounter}
                           maxCounter={maxCounter}
                           error={error}
                           SetError={SetError}
                           condition={condition}
                           setCondition={setCondition}
                    />


                </Grid>
            </Grid>

            <Button resetInp={resetInp} counterPlus={counterAdd}
                    maxCounter={maxCounter}
                    minCounter={minCounter}
                    setCondition={setCondition}
                    counter={counter}
                    setCounter={setCounter}
                    condition={condition}
                    setError={SetError}
                    error={error}
            />


        </div>
    );
}

export default App;
