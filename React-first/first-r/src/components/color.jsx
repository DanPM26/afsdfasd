import React from 'react'

const Color = ({colorValue}) => {
  return (
    <div>
       <input type="color" onChange={(e)=>colorValue(e.target.value)} />
    </div>
  )
}

export default Color