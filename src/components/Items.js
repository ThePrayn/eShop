import React, { useState } from 'react'
import Item from './Item'
export default function Items() {
    const [state, setState] = useState({
      
      items:[
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
        category:'coffe',
        price:'8'
      },
      {
        id: 5,
        title: 'Coockie',
        img: 'coockies.jpg',
        desc: 'Sweet yammy coockie',
        category:'coffe',
        price:'5'
      },
    ]})
    

    

    return (
    <main>
        {state.items.map(el => <Item key={el.id} item={el}/> )}

    </main>
  )
}
