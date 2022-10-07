import React from 'react'

const Card = ({title, image, description, price}) => {
  return (
    <div className="card">
        <p className="product-title">{title}</p>
        <img src={image} alt="" />
        {/* <p className="description">{description}</p> */}
        <p className="price">${price}</p>
    </div>
  )
}

export default Card