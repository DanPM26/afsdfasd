import React from 'react'

const Text = ({textValue}) => {
  return (
    <div>
      <input type="text" onChange={(e)=> textValue(e.target.value)} />
    </div>
  )
}

export default Text