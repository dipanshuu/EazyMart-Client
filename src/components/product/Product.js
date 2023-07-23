import React from 'react'
import EazyMartC from "../../assets/EazyMartC.jpg"
import './Product.scss'
function Product() {
  return (
    <div className='Product'>
      <div className='product-container'>
        <div className='product-img'>
          <div className='img-container'>
            <img src={EazyMartC} alt="" id="img"/>
          </div>
        </div>
        <div className='product-info'>
          <p className='title'>
            Delux Wall Manager 23",23X23 Solid Color
          </p>
          <p className='price'>Rs.549</p>
        </div>
      </div>
    </div>
  )
}

export default Product