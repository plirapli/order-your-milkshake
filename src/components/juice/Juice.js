import React from 'react'
import { motion } from "framer-motion";
import S from "./S";
import M from "./M";
import L from "./L";

export default function Juice({name, size, flavor}) {
  const slideDown = {
    initial: {
      y: '-50vw',
    },
    fall: {
      y: 0,
      transition: {
        type: 'spring',
        mass: 0.3
      }
    }
  }

  return (
    <div className="h-84 relative flex flex-col justify-end items-center">
      {size === "S" && <S slideDown={slideDown} name={name} flavor={flavor} />}
      {size === "M" && <M slideDown={slideDown} name={name} flavor={flavor} />}
      {size === "L" && <L slideDown={slideDown} name={name} flavor={flavor} />}

      <motion.div key={size}
      initial={{scale: 0, opacity: 0.5}} animate={{scale: 1, opacity: 1}} transition={{ type: 'easeIn', duration: 0.4}}
      className="absolute w-full h-12 bg-black bg-opacity-10 rounded-full-50 transform">
      </motion.div>
    </div>
  )
}
