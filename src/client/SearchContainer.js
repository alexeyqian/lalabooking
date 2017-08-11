import React from 'react';
import {render} from 'react-dom';
import CityAndDateComponent from './components/CityAndDateComponent';
import MapAndFilterButtonsComponent from './components/MapAndFilterButtonsComponent';
import HotelListComponent from './components/HotelListComponent';

const hotels = [
  {
    id: '12345',
    name: 'Fairmont Peace Hotel on the Bund',
    address: 'Huangpu, Shanghai',
    price: 250,
    currentcy: 'USD',
    currency_symbol: '$',
    photo: 'https://t-ec.bstatic.com/images/hotel/square200/447/44742449.jpg'
  },
  {
    id: '23456',
    name: 'Sky Fortune Boutique Hotel Shanghai',
    address: 'Minghang, Shanghai',
    price: 250,
    currentcy: 'USD',
    currency_symbol: '$',
    photo: 'https://s-ec.bstatic.com/images/hotel/square200/106/106601490.jpg'
  },
];

render(<CityAndDateComponent/>, document.getElementById('cityAndDateComponent'));
render(<MapAndFilterButtonsComponent/>, document.getElementById('mapAndFilterButtonsComponent'));
render(<HotelListComponent hotels={hotels}/>, document.getElementById('hotelListComponent'));
