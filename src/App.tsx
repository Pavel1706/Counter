import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from './Count';
import {Button} from './Button';
import {Input} from "./Input";
import { Grid } from '@material-ui/core';


function App() {
    const [counter, setCounter] = useState(0)
    let[minCounter, SetMinCounter]=useState(0)
    let[maxCounter, SetMaxCounter]=useState(0)

    function counterAdd() {
        if(counter !==maxCounter){
            setCounter(counter+1)
        }
        if (counter === maxCounter) {

        }
    }
    function resetInp() {

        setCounter(0)
    }

    useEffect(()=> {
        console.log('hey')
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])




    return (
        <div className='tablo'>

                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>

           <Input SetMinCounter={SetMinCounter} counter={counter}
                  setCounter={setCounter}
                  SetMaxCounter={SetMaxCounter}
                  minCounter={minCounter}
                  maxCounter={maxCounter}

           />
            {/*<Count counter={counter}/>*/}

                    </Grid>
                </Grid>

            <Button resetInp={resetInp} counterPlus={counterAdd }
                    maxCounter={maxCounter}
                    minCounter={minCounter}
                    counter={counter} setCounter={setCounter}/>


        </div>
    );
}

export default App;
