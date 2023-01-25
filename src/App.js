import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

function App() {
const [cartItems, setCartItems] = useState([]);
const [items, setItems] = useState([
{
id: 1,
title: 'Arabica coffee',
img: 'arab.jpg',
desc: 'Best coffee from Arabica',
category:'coffee',
price:'10'
},
{
id: 2,
title: 'American coffee',
img: 'amer.jpg',
desc: 'Best coffee from USA',
category:'coffee',
price:'15'
},
{
id: 3,
title: 'Japan coffee',
img: 'jap.jpg',
desc: 'Best coffee from Japan',
category:'coffee',
price:'18'
},
{
id: 4,
title: 'Chocolate',
img: 'choco.jpg',
desc: 'Sweet milck chocolate',
category:'chocolate',
price:'8'
},
{
id: 5,
title: 'Coockie',
img: 'coockies.jpg',
desc: 'Sweet yammy coockie',
category:'cookie',
price:'5'
},
]);

const addToOrder = (item) => {
setCartItems([...cartItems, item]);

}

return (
<div className='wrapper'>
<Header orders={cartItems}/>
<Items items={items} onAdd={addToOrder}/>
<Footer/>
</div>
);
}

export default App;

 
  