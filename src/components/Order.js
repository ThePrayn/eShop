import React from 'react'
import {FaTrash} from 'react-icons/fa'
export default function Order(props) {
  const { item } = props;
  return (
    <div className='item'>
      <img alt='coffee' src={'./img/' + props.item.img}/>
<h2>{props.item.title}</h2>
<i>{props.item.weight}</i>
<p></p>
<b>{props.item.price}$</b>
<FaTrash className='delete-icon' onClick={() => props.onDel(item.id) }/>
    </div>
  )
}
