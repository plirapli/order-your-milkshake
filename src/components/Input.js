import React from 'react'
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Input({setJuice, name}) {


  const inputNameHandler = (e) => {
    setJuice(prevState => ({...prevState, name: e.target.value}))
  }

  return (
    <>
      <h2 className="mb-2 font-bold">Enter Your Name</h2>
      <input 
        onChange={inputNameHandler} 
        value={name} 
        type="text"
        placeholder="Your Name"
        className="mb-4 w-full py-2 text-center rounded-full bg-white bg-opacity-60 shadow-sm placeholder-black placeholder-opacity-20 bg-transparent outline-none"/>

      {name && (
        <div className="flex w-full justify-center items-center">
          <div className="mr-4 flex-1">
            <Link to="/">
              <Nav nav="back" />
            </Link>
          </div>
          <div className="flex-1">
            <Link to="/flavor">
              <Nav nav="next" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
