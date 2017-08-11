import React from 'react';
import HotelItemComponent from './HotelItemComponent';

class HotelListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //alert('component did mount');
    const setHotelImageHeight = window.setHotelImageHeight;
    setHotelImageHeight();
  }

  render() {

    const listItems = this.props.hotels.map((hotel) =>
      <li key={hotel.id}><HotelItemComponent hotel={hotel} /></li>
    );

    return (

      <ul className="hotelList">{listItems}</ul>

    );
  }
}
export default HotelListComponent;
