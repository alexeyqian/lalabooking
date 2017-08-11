import React from 'react';
import {render} from 'react-dom';
import HotelPhotoSliderComponent from './components/HotelPhotoSliderComponent';
import HotelRoomTypeListComponent from './components/HotelRoomTypeListComponent';
import MiniABComponent from './components/MiniABComponent';

const rooms1 = [
  {
    // brief info
    id: 'r001',
    name: 'room product 1',
    price: 120.00,
    currency: 'USD', currency_symbel: '$',
    bed_type: 'queen',
    bed_number: 2,
    fits: 2,

    isFreeCancellation: true,
    freeCancellationBefore: '',
    isPrepayment: true,
    isIncludeBreakfast: true,



  },
  {
    // brief info
    id: 'r002',
    name: 'room product 2',
    price: 130.00,
    currency: 'USD', currency_symbel: '$',
    bed_type: 'king',
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
    currency: 'USD', currency_symbel: '$',
    bed_type: 'queen',
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
    currency: 'USD', currency_symbel: '$',
    bed_type: 'king',
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
    currency: 'USD', currency_symbel: '$',
    bed_type: 'queen',
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
    currency: 'USD', currency_symbel: '$',
    bed_type: 'king',
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
    photo: 'https://dimg04.c-ctrip.com/images/hotel/373000/372135/149c35a32f034f18893ba2c5b1bad047_C_130_130_Q50.jpg',
    photos: [
      {
        url: 'https://dimg04.c-ctrip.com/images/200j0f0000007b0zfFDAA_C_550_412_Q50.jpg',
        title: 'room 1'
      },
      {
        url: 'https://dimg04.c-ctrip.com/images/20050f0000007ksv1DD7A_C_550_412_Q50.jpg',
        title: 'room 2'
      },
      {
        url: 'https://dimg04.c-ctrip.com/images/200u0f0000007ej6eD476_C_550_412_Q50.jpg',
        title: 'room 3'
      },
      {
        url: 'https://dimg04.c-ctrip.com/images/20030f0000007ek2oF079_C_550_412_Q50.jpg',
        title: 'room 4'
      }
    ],
    bed_type: 'queen',
    bed_number: 2,
    can_add_bed: true,
    is_include_breakfast: true,
    is_no_smoking: false,

    currency: 'USD', currency_symbel: '$',
    price: 200,
    min_sqft: 180,
    max_sqft: 200,
    fits: 2,
    floors :[1, 4, 15],
    // ...
    rooms: rooms1
  },
  {
    id: 'rt_002',
    name: 'room type 002',
    photo: 'https://dimg04.c-ctrip.com/images/20050f0000007ksv1DD7A_C_550_412_Q50.jpg',
    bed_type: 'king',
    bed_number: 1,
    can_add_bed: true,
    is_include_breakfast: true,
    is_no_smoking: false,

    currency: 'USD', currency_symbel: '$',

    price: 210,
    min_sqft: 180,
    max_sqft: 200,

    fits: 2,
    floors :[2,9],
    // ...
    rooms: rooms2
  },
  {
    id: 'rt_003',
    name: 'room type 003',
    photo: 'https://dimg04.c-ctrip.com/images/200j0f0000007b0zfFDAA_C_130_130_Q50.jpg',
    bed_type: 'king',
    bed_number: 1,
    can_add_bed: true,
    is_include_breakfast: true,
    is_no_smoking: false,

    currency: 'USD', currency_symbel: '$',
    price: 280,
    min_sqft: 180,
    max_sqft: 200,
    fits: 2,
    floors :[3, 18],
    // ...
    rooms: rooms3
  },
];

const hotel = {
  shortDescription: 'Short description',
  description: 'this is logn description',
  roomTypes: roomTypes
};

const shortDescription = <div>{window.shortDescription}</div>;
const longDescription = <div>{window.longDescription}</div>;
render(<HotelPhotoSliderComponent/>, document.getElementById('hotelPhotoSliderComponent'));
render(<MiniABComponent a={shortDescription} b={longDescription}/>, document.getElementById('hotelDescriptionComponent'));
render(<HotelRoomTypeListComponent roomTypes = {hotel.roomTypes}/>, document.getElementById('hotelRoomTypeListComponent'));
