import React from 'react'

const Dish = ({data: {backgroundURL, name, description, expirationDate}}) => (
  <div style={{'backgroundImage': `url(${backgroundURL})`}}>
    <div>{name}</div>
    <div>{description}</div>
    <div>{expirationDate}</div>
  </div>
)

export default Dish