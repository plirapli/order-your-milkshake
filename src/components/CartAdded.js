import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from './Nav'

export default function CartAdded({menuFadeIn}) {
  return (
    <motion.div initial="hidden" animate="visible" variants={menuFadeIn}
      className="flex flex-col items-center">
      <div className="mb-4 flex flex-col items-center text-center font-bold text-lg">
        <div className="mb-2 h-12 w-12 rounded-full text-xl flex items-center justify-center bg-white bg-opacity-60 shadow-sm">
          &#10004;
        </div>
        <p>Added to Cart!</p>
        <p className="text-base">Please check your cart.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row w-full justify-center items-center">
        <div className="w-full mb-2 sm:mr-4 sm:mb-0 flex-1">
          <Link to="/confirm">
            <Nav nav="back" />
          </Link>
        </div>
        <div className="w-full flex-1">
          <Link to="/">
            <Nav nav="order again" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
