import React, {useState} from 'react'
import Button from '../component/Button'
import Input from '../component/Input'
import './index.module.css'

const ProductList = () => {
  const [product, setProduct] = useState('')
  const [products, setProducts] = useState([])
  const handleChange = (e) => {
    setProduct(e.target.value)
  }
  const handleSave = () => {
    setProducts([...products, product])
    setProduct('')
  }
  const customFont = {
    color: 'black',
    fontSize: '20px'
  }

  return (
    <div className="wrapper">
      <h2 style={customFont}>Product List</h2>
      <div className="input-group mb-3">
        <Input id="123" name="product" type="text" onChange={handleChange} value={product} />
        <Button id='123' type='button' onClick={handleSave} />
      </div>
      <ul>
        {products.map((item) => {
          <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductList