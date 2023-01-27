import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Catigories from './components/Catigories';
import ShowFullItem from './components/ShowFullItem';

function App() {
const [cartItems, setCartItems] = useState([]);
const [items] = useState([
{
id: 1,
title: 'Arabica coffee',
img: 'arab.jpg',
desc: 'Best coffee from Arabica',
weight: '250 grams',
categ:'Coffee',
price:'10'
},
{
id: 2,
title: 'American coffee',
img: 'amer.jpg',
desc: 'Best coffee from USA',
weight: '250 grams',
categ:'Coffee',
price:'15'
},
{
id: 3,
title: 'Japan coffee',
img: 'jap.jpg',
desc: 'Best coffee from Japan',
weight: '250 grams',
categ:'Coffee',
price:'18'
},
{
id: 4,
title: 'Chocolate',
img: 'choco.jpg',
weight: '100 grams',
desc: 'Sweet milck chocolate',
categ:'Snacks',
price:'8'
},
{
id: 5,
title: 'Coockie',
img: 'coockies.jpg',
desc: 'Sweet yammy coockie',
weight: '100 grams',
categ:'Snacks',
price:'5'
},
{
id: 6,
title: 'Marshmello',
img: 'marsh.jpg',
desc: 'Oh yeah thats what you need',
weight: '100 grams',
categ:'Snacks',
price:'8'
}
]);


const addToOrder = (item) => {
setCartItems([...cartItems, item]);
}

const deleteOrder = (id) => {
setCartItems(cartItems.filter(el => el.id !== id))
}

const [categItems, setCategtItems] = useState(items);
const getCategory = (categ) => {
    if(categ === 'all'){setCategtItems(items)
    return}
    setCategtItems(items.filter(el => el.categ === categ))
}

const [showFullItem, setShowFullItem] = useState({fullItem:'', show: false})
const onShowItem = (item) =>{
    setShowFullItem(showFullItem => {
    return {
    fullItem: item,
    show: !showFullItem.show
    }
    });
    }


return (
<div className='wrapper'>
<Header orders={cartItems} onDel={deleteOrder}/>
<Catigories getCategory={getCategory}/>
<Items onShowItem={onShowItem} items={categItems} onAdd={addToOrder}/>
{showFullItem.show && <ShowFullItem onShowItem={onShowItem} item={showFullItem.fullItem}/>}
<Footer/>
</div>
);
}

export default App;

 
  