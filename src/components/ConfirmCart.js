import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./Nav";

export default function ConfirmCart({
  juice, setJuice, setSizePrice, setToppingPrice, setCartItems, menuFadeIn
}) {
  const addToCartHandler = () => {
    if (juice.name === '') {
      setCartItems(prevState => ([...prevState, {...juice, name: 'Unknown', id: Math.random()*10}]))
    } else {
      setCartItems(prevState => ([...prevState, {...juice, id: Math.random()*10}]))
    }

    setSizePrice(10000)
    setToppingPrice(0)
    setJuice(prevState => ({...prevState, size:'M', name: '', topping:'no'}))
  }

  return (
    <motion.div 
      initial={menuFadeIn.hidden} animate={menuFadeIn.visible} variants={menuFadeIn}
      className="flex flex-col items-center">
      <h2 className="mb-2 font-bold">Add to Cart?</h2>

      <div className="mb-4 capitalize flex flex-col items-center text-center">
        <div>
          {`1x `}
          <span className="font-bold">{juice.flavor}</span>{` Milkshake with `}
          <span className="font-bold">{juice.topping}</span>{` topping (${juice.size})`}
        </div>
        <div className="font-bold">
          Rp{juice.price}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-center items-center">
        <div className="mb-2 sm:mr-4 sm:mb-0 w-full flex-1">
          <Link to="/topping">
            <Nav nav="back" />
          </Link>
        </div>
        <div onClick={addToCartHandler} className="w-full flex-1">
          <Link to="/success">
            <Nav nav="Add to Cart" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
