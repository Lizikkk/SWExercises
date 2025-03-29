import React, { useState } from 'react'

const useToggle = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState)

  const toggle = () => {
    setIsVisible((prev) => !prev)
  }
  
  return [isVisible, toggle]
}

export default useToggle
