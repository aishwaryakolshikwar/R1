import React, { useEffect } from 'react';

export const CounterButton = ({ onIncrement,numberOfClicks}) => {
   // console.log('Rendering CounterButton');
    useEffect(() => {
        console.log('useEffect function called' );
    })

    return (
        <>
        <p>clicked button {numberOfClicks } times</p>
        <button onClick={ onIncrement }>Click me!</button>
        </>
    );
}