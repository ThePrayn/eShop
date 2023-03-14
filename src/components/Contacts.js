import React from 'react'
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
export default function Contacts() {
  return (
    <div className='contacts'>
        <div className='contacts-text'> 
        <i><h1>Our contacts</h1></i>
        <br/>
       <i><h3>Adress: Krasnoyars, 9 May street, Planeta mall</h3>
       <br/>
<h3>Phone number: +79076998070</h3>
<br/>
<h3>E-mail: coffee-coffee@gmail.com</h3></i>
</div>
<div className='contacts-map'>
<YMaps>
  <Map width={600}
  height={400}
    defaultState={{
      center: [56.050918, 92.904378],
      zoom: 9,
      controls: [],
    }}
  >
    <ZoomControl options={{ float: "right" }} />
    <Placemark geometry={[56.050918, 92.904378]} />
  </Map>
</YMaps>;
</div>
    </div>
  )
}
