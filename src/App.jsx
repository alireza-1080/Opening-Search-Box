import "./App.css"
import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";

function App() {

  const [isItActive, setIsItActive] = useState(false)

  const [inputValue, setInputValue] = useState("")

  const searchElem = useRef(null)

  const clickHandler = event => {
    if (searchElem.current && searchElem.current.contains(event.target)) {
      setIsItActive(true)
    } else {
      setIsItActive(false)
    }
  }

  const keyPressHandler = event => {
    setInputValue(event.target.value)   
  }

  useEffect(() => {
    if (isItActive) {
      searchElem.current.classList.remove("not-active")
    } else {
      searchElem.current.classList.add("not-active")
      setInputValue("")
    }
  }, [isItActive])



  return (
    <div className="body" onClick={(event) => clickHandler(event)}>
      <div className="app-container not-active" ref={searchElem}>
        <input type="text" value={inputValue} onChange={keyPressHandler} placeholder="Type Here..."/>
        <div className="icon-container">
          <FaSearch className="icon" />
        </div>
      </div>
    </div>
  )
}

export default App