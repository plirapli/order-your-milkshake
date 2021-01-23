import React from 'react'

export default function Cart({setCartItems, cartItems, item}) {
  const deleteCartHandler = () => {
    setCartItems(prevState => (prevState.filter(cartItem => cartItem.id !== item.id)))
  }

  return (
    <div className="mb-3 flex justify-between items-center">
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold capitalize mr-2">
            [{item.name}] {item.flavor} Milkshake
            <span className="lowercase">{` with `}</span>
            {item.topping} Topping ({item.size})
          </div>
          <button onClick={deleteCartHandler} className="px-2 py-1 rounded-md shadow-sm hover:shadow outline-none focus:outline-none bg-white bg-opacity-60 transition-all">
            <p className="text-red-500 font-bold">
              &#10006;
            </p>
          </button>
        </div>
        <div className="text-xs">
          Rp{item.price}
        </div>
      </div>
    </div>
  )
}
