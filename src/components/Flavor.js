import React from 'react'
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function flavor({_flavor, setJuice}) {
  const flavors = ['vanilla', 'chocolate', 'strawberry', 'greentea', 'mango', 'mint', 'banana', 'blueberry']

  const flavorHandler = (flavorPicked) => {
    setJuice(prevState => ({...prevState, flavor: flavorPicked}))
  }

  const optionSelected = (flavor, trueVal, falseVal) => _flavor === flavor ? trueVal : falseVal

  return (
    <>
      <h2 className="mb-3 font-bold">Pick a Flavor</h2>
      <div className="flex max-w-full sm:flex-wrap sm:justify-center overflow-x-scroll sm:overflow-hidden rounded-xl mb-3">
        {flavors.map(flavor => (
          <div key={flavor} className="pr-1 flex flex-col items-center pb-1 mr-2 last:mr-0 sm:mb-2">
            <button onClick={() => flavorHandler(flavor)} className={`h-16 w-24 bg-${flavor}-500 rounded-xl shadow focus:outline-none`}>
              <p className={
                  `text-xs font-bold mx-2 py-3 bg-white rounded-lg 
                  ${optionSelected(flavor, 'bg-opacity-20', 'bg-opacity-0')} 
                  ${optionSelected(flavor, 'shadow', '')} transition-all`}
              >
                {flavor}
              </p>
            </button>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="mr-4 flex-1">
          <Link to="/input">
            <Nav nav="back" />
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/topping">
            <Nav nav="next" />
          </Link>
        </div>
      </div>
    </>
  )
}
