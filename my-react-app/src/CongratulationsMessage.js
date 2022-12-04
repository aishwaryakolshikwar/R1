import React from 'react';

export const CongratulationsMessage =({numberOfClicks,threshold}) => {
    return numberOfClicks>=threshold
    ?<h1>Congratulations {threshold}</h1>
    : null;
}