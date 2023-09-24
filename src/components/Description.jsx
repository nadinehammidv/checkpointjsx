import React from 'react'
import { product } from "../product";
function Description() {
  console.log(product);
  return (
  <div>{product.description}</div >
  )
}

export default Description