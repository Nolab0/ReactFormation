import { useState, useEffect } from 'react'

function getValueFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setValueInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Custom hook to use the browser storage
function useLocalStorage(initialData, storageKey) {
    const [data, setData] = useState(getValueFromStorage(storageKey) || initialData);
    useEffect(() => {
        setValueInStorage(storageKey, data)
    }, [data]);

    return [data, setData];
}

export default useLocalStorage;