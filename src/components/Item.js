import React from 'react';

const Item = (props) => {
const { item } = props;

return (
<div className='item'>
<img alt='coffee' src={'./img/' + item.img} onClick={() => props.onShowItem(props.item)}/>
<h2>{item.title}</h2>
<p>{item.desc}</p>
<i>{item.weight}</i>
<p></p>
<b>{item.price}$</b>

<button className='add-to-card' onClick={() => props.onAdd(item)} >+</button>
</div>
);
}

export default Item;