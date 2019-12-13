import { useEffect } from 'react';
import  useLocalStorage  from './useLocalStorage';

const useDarkMode = () => {

    const [someValue, setSomeValue] = useLocalStorage();

    useEffect(() => {
      let addStyle = document.querySelector("navBar");

       if(someValue === true) {
        console.log(addStyle);
        addStyle.classList.toggle("dark-mode");

        // code to add class 'dark-mode to body'
        // this is done by adding to the dom directly, have done it before, but need to look up how I did it   
    }
       else {
        //addStyle.classList.toggle("dark-mode");
        //let removeStyle = document.querySelector("navBar");
        //removeStyle.classList.toggle("dark-mode__toggle");
           // remove the class 'dark-mode from the body'
        //return [false, setValue];
        }

       // I feel like we need to return the setted element, but I don't know how to do that
    }, []);

    const setValue = value => {
        setSomeValue(value) // not sure about this...
    };

    return [someValue, setValue];
}

export default useDarkMode;