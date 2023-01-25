import React from 'react'

export default function Order(props) {
  return (
    <div className='item'>
  <h2>{props.item.title}</h2>
<p>{props.item.desc}</p>
<b>{props.item.price}$</b>
    </div>
  )
}
