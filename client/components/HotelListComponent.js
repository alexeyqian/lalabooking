import React from 'react';
import HotelItemComponent from './HotelItemComponent';

class HotelListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const hotels = this.props.hotels;
    const listItems = hotels.map((hotel) =>
      <li key={hotel.id}><HotelItemComponent hotel={hotel} /></li>
    );

    return (

      <ul className="hotelList">{listItems}</ul>

    );
  }
}
export default HotelListComponent;
