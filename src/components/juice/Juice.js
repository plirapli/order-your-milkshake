import React from 'react'
import S from "./S";
import M from "./M";
import L from "./L";

export default function Juice({name, size, flavor}) {
  return (
    <div className="h-80 relative flex flex-col justify-end items-center">
      <div className="w-40 relative flex flex-col justify-center items-center z-10 mb-2">
        {size === "S" && <S name={name} flavor={flavor} />}
        {size === "M" && <M name={name} flavor={flavor} />}
        {size === "L" && <L name={name} flavor={flavor} />}
      </div>

      <div className="absolute w-full h-12 bg-black bg-opacity-10 rounded-full-50 transform">
        
      </div>
    </div>
  )
}
