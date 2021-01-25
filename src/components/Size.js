import React from 'react'
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";

export default function Size({setJuice, setSizePrice, menuFadeIn}) {
  const sizes = [
    {size: 'S', price: 5000}, 
    {size: 'M', price: 10000}, 
    {size: 'L', price: 12000}
  ];

  const sizeHandler = (sizeClicked) => {
    setSizePrice(sizeClicked.price)
    setJuice(prevState => ({...prevState, size: sizeClicked.size}))
  }

  return (
    <motion.div
      initial="hidden" animate="visible" variants={menuFadeIn}
      className="flex flex-col items-center">
      <h2 className="mb-2 font-bold">Pick a Size</h2>
      <div className="flex justify-center mb-4">
        {sizes.map(size => (
          <button key={size.size} onClick={() => sizeHandler(size)} className="h-12 w-12 mr-4 last:mr-0 bg-white bg-opacity-60 shadow rounded-xl focus:outline-none text-center font-bold">{size.size}</button>
        ))}
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="flex-1">
          <Link to="/input">
            <Nav nav="next" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
