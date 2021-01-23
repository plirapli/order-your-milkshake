import React from 'react'
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Qty({setJuice, juice}) {
  const minQty = () => {
    if (juice.qty > 1) {
      setJuice(prevState => ({...prevState, qty: juice.qty-1}))
    }
  }
  const addQty = () => {
    setJuice(prevState => ({...prevState, qty: juice.qty+1}))
  }

  return (
    <>
      <div className="max-w-full mb-4 flex justify-center items-center">
        <button onClick={minQty} className="focus:outline-none h-10 w-10 bg-white bg-opacity-60 shadow-sm rounded-l-full font-medium">-</button>
        <div className="bg-white bg-opacity-60 shadow rounded-xl h-14 px-8 flex items-center justify-center">
          <div className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis font-bold text-lg">
            {juice.qty}
          </div>
        </div>
        <button onClick={addQty} className="focus:outline-none h-10 w-10 bg-white bg-opacity-60 shadow-sm rounded-r-full font-medium">+</button>
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="mr-4 flex-1">
          <Link to="/flavor">
            <Nav nav="back" />
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/">
            <Nav nav="next" />
          </Link>
        </div>
      </div>
    </>
  )
}
