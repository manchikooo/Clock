import React, {useState} from 'react';
import './App.scss';
import {AnalogClock} from "./Clock/AnalogClock";
import {DigitalClock} from "./Clock/DigitalClock";
import styles from "./Clock/Clock.module.scss"

function App() {

    const [toggleClock, setToggleClock] = useState<boolean>(true)

    return (
        <div className="App">
            {toggleClock ? <AnalogClock/> : <DigitalClock/>}
            <div className={styles.buttonStyle} onClick={() => setToggleClock(!toggleClock)}>
                <div>change clock</div>
            </div>
        </div>
    );
}

export default App;
