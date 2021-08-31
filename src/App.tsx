import React, {useState} from 'react';
import './App.css';
import {Count} from './Count';
import {Button} from './Button';
import {Input} from "./Input";


function App() {
    const [counter, setCounter] = useState(0)
    const [error, SetError] = useState<string>('')

    function counterAdd() {
        if (counter !== 5) {
            setCounter(counter+1)
        }
        if (counter === 4) {
            SetError('The END')
        }
    }
    function resetInp() {
        SetError('')
        setCounter(0)
    }

    return (  <div className='tablo'>
           <Input setCounter={setCounter} counter={counter} />
            <Count counter={counter}/>
            {error && <div className='error'>{error}</div>}
            <Button resetInp={resetInp} counterPlus={counterAdd} counter={counter} setCounter={setCounter}/>
        </div>
    );
}

export default App;
