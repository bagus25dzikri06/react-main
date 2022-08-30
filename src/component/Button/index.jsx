import React from 'react'
import propTypes from 'prop-types'

const Button = ({id, type, onClick}) => {
  return (
    <div>
      <button onClick={onClick} type={type} id={id} className='input-group-text'>Add</button>
    </div>
  )
}

Button.defaultProps = {
  children: 'add'
}
Button.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.string,
  id: propTypes.string.isRequired,
}

export default Button