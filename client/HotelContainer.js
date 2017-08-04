import React from 'react';
import {render} from 'react-dom';
import HotelPhotoSliderComponent from './components/HotelPhotoSliderComponent';
import HotelRoomTypeListComponent from './components/HotelRoomTypeListComponent';

const rooms1 = [
  {
    // brief info
    id: 'r001',
    name: 'room product 1',
    price: 120.00,
    currency: 'USD',
    bed_type: 'queen_size',
    bed_number: 2,
    fits: 2,

    isFreeCancellation: false,
    freeCancellationBefore: '8/3/2017 12:00AM',
    isPrepayment: true,
    isIncludeBreakfast: true,

    // detail info

  },
  {
    // brief info
    id: 'r002',
    name: 'room product 2',
    price: 130.00,
    currency: 'USD',
    bed_type: 'king_size',
    bed_number: 1,
    fits: 2,

    isFreeCancellation: false,
    freeCancellationBefore: '8/3/2017 12:00AM',
    isPrepayment: true,
    isIncludeBreakfast: true,

    // detail info

  },
];

const rooms2 = [
  {
    // brief info
    id: 'r003',
    name: 'room product 3',
    price: 120.00,
    currency: 'USD',
    bed_type: 'queen_size',
    bed_number: 2,
    fits: 2,

    isFreeCancellation: false,
    freeCancellationBefore: '8/3/2017 12:00AM',
    isPrepayment: true,
    isIncludeBreakfast: true,

    // detail info

  },
  {
    // brief info
    id: 'r004',
    name: 'room product 4',
    price: 130.00,
    currency: 'USD',
    bed_type: 'king_size',
    bed_number: 1,
    fits: 2,

    isFreeCancellation: false,
    freeCancellationBefore: '8/3/2017 12:00AM',
    isPrepayment: true,
    isIncludeBreakfast: true,

    // detail info

  },
];

const rooms3 = [
  {
    // brief info
    id: 'r005',
    name: 'room product 5',
    price: 120.00,
    currency: 'USD',
    bed_type: 'queen_size',
    bed_number: 2,
    fits: 2,

    isFreeCancellation: false,
    freeCancellationBefore: '8/3/2017 12:00AM',
    isPrepayment: true,
    isIncludeBreakfast: true,

    // detail info

  },
  {
    // brief info
    id: 'r006',
    name: 'room product 6',
    price: 130.00,
    currency: 'USD',
    bed_type: 'king_size',
    bed_number: 1,
    fits: 2,

    isFreeCancellation: false,
    freeCancellationBefore: '8/3/2017 12:00AM',
    isPrepayment: true,
    isIncludeBreakfast: true,

    // detail info

  },
];

const roomTypes = [
  {
    id: 'rt_001',
    name: 'room type 001',
    bed_type: 'queen',
    bed_number: 2,
    currency: 'USD',
    price: 200,
    sqft: 180,
    floors :[1, 4, 15],
    // ...
    rooms: rooms1
  },
  {
    id: 'rt_002',
    name: 'room type 002',
    bed_type: 'king',
    bed_number: 1,
    currency: 'USD',
    price: 210,
    sqft: 220,
    floors :[2,9],
    // ...
    rooms: rooms2
  },
  {
    id: 'rt_003',
    name: 'room type 003',
    bed_type: 'king',
    bed_number: 1,
    currency: 'USD',
    price: 280,
    sqft: 260,
    floors :[3, 18],
    // ...
    rooms: rooms3
  },
];

const hotel = {
  roomTypes: roomTypes
};

render(<HotelPhotoSliderComponent/>, document.getElementById('hotelPhotoSliderComponent'));
render(<HotelRoomTypeListComponent roomTypes = {hotel.roomTypes}/>, document.getElementById('hotelRoomTypeListComponent'));
