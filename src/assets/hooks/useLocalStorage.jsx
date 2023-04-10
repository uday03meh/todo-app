import React, {useState, useEffect } from 'react'
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const localValue = window.localStorage.getItem(key)
        return localValue ? JSON.parse(localValue) : initialValue
        }
        catch(error){
            console.log(error)
            return initialValue
        }
    })
useEffect(()=> {
    window.localStorage.setItem(key, JSON.stringify(value))
},[key, value])

    // not naming them task, setTask and keeping them generic to use for other elements such as color
  return [value, setValue]
}

export default useLocalStorage
