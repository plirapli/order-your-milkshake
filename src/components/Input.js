import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./Nav";

export default function Input({setJuice, name, menuFadeIn}) {


  const inputNameHandler = (e) => {
    setJuice(prevState => ({...prevState, name: e.target.value}))
  }

  return (
    <motion.div 
      initial="hidden" animate="visible" variants={menuFadeIn}
      className="flex flex-col items-center">
      <h2 className="mb-2 font-bold">Enter Your Name</h2>
      <input 
        onChange={inputNameHandler} 
        value={name} 
        type="text"
        placeholder="Your Name"
        className="mb-4 w-full py-2 text-center rounded-full bg-white bg-opacity-60 shadow-sm placeholder-black placeholder-opacity-20 bg-transparent outline-none"/>

      
      <div className="flex w-full justify-center items-center">
        <div className="flex-1">
          <Link to="/">
            <Nav nav="back" />
          </Link>
        </div>

        {name && (
        <div className="ml-4 flex-1">
          <Link to="/flavor">
            <Nav nav="next" />
          </Link>
        </div>
        )}
      </div>
    </motion.div>
  )
}
