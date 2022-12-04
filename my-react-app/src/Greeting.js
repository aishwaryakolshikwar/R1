import React from 'react';

export const Greeting = ({name,numberofmsg}) =>  {
    // console.log('Rendering Greeting');
    if(!name) return null;
    let ismorning=(new Date()).getHours<12;
    let greetingHeader=ismorning
    ?  <h3>Good Morning {name}!</h3> 
    :  <h3>Good Evening {name}!</h3>;

    return (
        <>
        {greetingHeader}
        {numberofmsg===0
        ? null
        : <p>You have {numberofmsg} new messages</p>}
        </>
    );
    
}
 