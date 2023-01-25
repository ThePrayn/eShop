import React from 'react';
import Item from './Item';

export default function Items(props) {
return (
<main>
{props.items.map(item => <Item key={item.id} item={item} onAdd={props.onAdd} />)}
</main>
);
}
