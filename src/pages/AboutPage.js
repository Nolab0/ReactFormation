import React, { useContext, useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import UserContext from '../contexts/UserContext'

function AboutPage() {

    const [count, setCount] = useState(1);
    const [isOn, setIsOn] = useState(true);

    const calcul = useCallback((nb) => {
        console.log("Start calcul");
        return nb * nb;

    }, []);

    const { user } = useContext(UserContext);

    // const result = useMemo(() => calcul(count), [count]);

    return (
        <div>
            <h1>About</h1>
            <p>Welcome to The Facebook</p>
            <p>You are connected as {user.author}</p>

            <div>
                <h5>Counter</h5>
                <button onClick={() => setCount(count - 1)}>-</button>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
                {/* <span>Result is: {result}</span> */}
            </div>

            <div>
                <h5>Switch</h5>
                {isOn ? "ON" : "OFF"}
                <button onClick={() => setIsOn(!isOn)}>Switch</button>
            </div>
            <br />
            <ShowResult calcul={calcul} count={count} />
        </div>
    )
}


function ShowResult(props) {
    const [result, setResult] = useState('');
    useEffect(() => {
        const res = props.calcul(props.count);
        setResult(res);
    }, [props]);

    return (
        <div style={{ border: '1px solid' }}>
            <h5>ShowResult</h5>
            The result is {result}
        </div>
    )
}


export default AboutPage