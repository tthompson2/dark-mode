import React, { useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const useDarkMode = () => {

    const [someValue, setSomeValue] = useLocalStorage();

    useEffect(() => {
       if(someValue === true) {

        var style = document.getElementById("body");
        style.classList.toggle(".dark-mode__toggle")

        // code to add class 'dark-mode to body'
        // this is done by adding to the dom directly, have done it before, but need to look up how I did it
       }
       else {
        var style = document.getElementById("body");
        style.classList.toggle(".dark-mode__toggle");
           // remove the class 'dark-mode from the body'
       }

       return style;
       // I feel like we need to return the setted element, but I don't know how to do that
    })

    const setValue = value => {
        setSomeValue(value) // not sure about this...
    };

    return [someValue, setValue];
}

export default useDarkMode;