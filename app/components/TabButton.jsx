import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white font-semibold text-xl" : "text-white";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton