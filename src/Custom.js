import {useState} from 'react';

// Custom Hook
function useCustomCounter(params) {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount (count + 1);
    };
    // getting some return from the custom hook in the form of objects : here we are getting two objects; one initial value and another is handler function
    return {
        count, 
        handleCount
    };
}

export default useCustomCounter;