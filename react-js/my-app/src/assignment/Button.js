import React from 'react'

const Button = ({label="click me"}) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  )
}

export default Button