import React from 'react';
import {render} from 'react-dom';
import FiltersComponent from './components/FiltersComponent';

const filterStars = [
  {id: 'star1', name: '1 start'},
  {id: 'star2', name: '2 starts'},
  {id: 'star3', name: '3 starts'},
  {id: 'star4', name: '4 starts'},
  {id: 'star5', name: '5 starts'},
  {id: 'starno', name: 'Unstarted'}
];

const filterBrands = [
  // economic -> comfort -> dulex -> highend
  {id: 'hanting', name:'Hanting', group_id: 'economic', group_name: 'economic'},
  {id: 'rujia', name:'Rujia', group_id: 'economic', group_name: 'economic'},
  {id: 'jinjiang', name:'Jingjiang', group_id: 'dulex', group_name: 'Dulex'},
];

const filterThemes = [
  {id: 'business', name: 'Business'},
  {id: 'hangout', name: 'Hangout'},
];

const filterPolicies = [];

const filterFacilityGroups = [

  {
    id: 'hotel_facility',
    name: 'Hotel Facility',
    order: 1,
    filters: [
      {id: 'parking', name: 'Parking'},
      {id: 'private_parking', name: 'Private parking'},
      {id: 'facilities_for_disabled', name: 'Facilities for disabled'},
      {id: 'non_smoking_rooms', name: 'Non-smoking rooms'},
      {id: 'family_rooms', name: 'Family rooms'},
      {id: 'pet_friendly', name: 'Pet friendly'},
      {id: 'daily_house_keeping', name: 'Daily Housekeeping'},
      {id: 'room_service', name: 'Room service'},

      {id: 'free_wifi', name: 'Free Wifi'},
      {id: 'swimming_pool', name: 'Swimming pool'},
      {id: 'fitness_center', name: 'Fitness center'},
      {id: 'restaurant', name: 'Restaurant'},
      {id: 'bar', name: 'Bar'},
      {id: 'spa', name: 'Spa'},
      {id: 'airport_shuttle', name: 'Airport Shuttle'},

      {id: 'invoice_provided', name: 'Invoice provided'},
    ]
  },

  {
    id: 'room_facility',
    name: 'Room Facility',
    order: 2,
    filters: [
      {id: 'air_conditioning', name: 'Air conditioning'},
      {id: 'flat_screen_tv', name: 'Flat-screen TV'},
      {id: 'kitchen', name: 'Kitchen/Kitchenette'},
      {id: 'coffee_machine', name: 'Coffee machine'},
      {id: 'tea_maker', name: 'Tea maker'},
    ]
  },
];

const filterData = {stars: filterStars, themes: filterThemes, brands: filterBrands,
  policies: filterPolicies, facilityGroups: filterFacilityGroups};

render(<FiltersComponent filterData = {filterData}/>, document.getElementById('filtersComponent'));
