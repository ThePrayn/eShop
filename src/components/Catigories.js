import React, { useState } from 'react'

export default function Catigories(props) {
  const [categ] = useState([
    {key:'all',
    name:'All'},
    {key:'Coffee',
    name:'Coffee'},
    {key:'Snacks',
    name:'Snacks'},
  ])
  
    return (
    <div className='categ'>{categ.map(el => (<div key={el.key} onClick={() => props.getCategory(el.key)}>{el.name}</div>))}</div>
  )
}
