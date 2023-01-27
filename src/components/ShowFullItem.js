import React from 'react'

export default function ShowFullItem(props) {
  return (
    <div className='full-item' onClick={() => props.onShowItem(props.item)}>
        <div>
            <img alt='coffee' src={'./img/' + props.item.img}/>
            <h2>{props.item.title}</h2>
            <i>{props.item.weight}</i>
            <p></p>
            <b>{props.item.price}$</b>
        </div>
    </div>
  )
}
