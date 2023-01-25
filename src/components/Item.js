import React from 'react';

const Item = (props) => {
const { item } = props;

return (
<div className='item'>
<img alt='coffee' src={'./img/' + item.img}/>
<h2>{item.title}</h2>
<p>{item.desc}</p>
<b>{item.price}$</b>

<button className='add-to-card' onClick={() => props.onAdd(item)}>+</button>
</div>
);
}

export default Item;