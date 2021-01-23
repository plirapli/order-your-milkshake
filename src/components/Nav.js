import React from 'react'

export default function Nav(props) {
  return (
    <button className="w-full bg-white bg-opacity-60 shadow-md text-black font-bold text-opacity-100 rounded-full text-center py-2 px-4 capitalize focus:outline-none">
      {props.nav}
    </button>
  )
}
