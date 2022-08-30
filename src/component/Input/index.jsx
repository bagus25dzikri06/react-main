import React from 'react'
import propTypes from 'prop-types'

const Input = ({type, value, name, id, placeholder, onChange}) => {
  return (
    <div>
      <input type={type} value={value} name={name} id={id} placeholder={placeholder} onChange={onChange} className='form-control'/>
    </div>
  )
}

Input.defaultProps = {
  value: '',
  placeholder: 'Product'
}
Input.propTypes = {
  type: propTypes.string, 
  value: propTypes.string.isRequired, 
  name: propTypes.string, 
  id: propTypes.string, 
  placeholder: propTypes.string, 
  onClick: propTypes.func
}

export default Input