import { useState, useCallback } from 'react'

// createMappedState

export const useHookFactory = (mapper) => {
  return (initialValue) => {
    const [value, setValue] = useState(mapper(initialValue))

    const setMappedValue = useCallback((newValue) => {
      setValue(mapper(newValue))
    },[])
  
    return [value, setMappedValue]
  }
}

// example 

// const useNoSpacesState = useHookFactory((newValue) => {
//   return newValue?.replaceAll(/\s/g, '');
// });