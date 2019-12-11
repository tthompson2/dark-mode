import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // key, intialValue are the destructed props we are using for the example

    const[name, setName] = useState(() => {

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setName = value => {
        setName(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [name, setName];
};