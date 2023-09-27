import React from 'react'

function Button({label = 'label', type, onClick, disabled}) {
  return (
    <div>
      <button onClick={onClick} type={type} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Button
