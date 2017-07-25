import React from 'react';
import moment from 'moment';

class HotelItemComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const hotel = this.props.hotel;
    return (

      <div id={'hotel_'+hotel.id} className="hotelItem">

        <img src={hotel.photo} />
        <h3>{hotel.name}</h3>
        <div><span className="label label-default">7</span> Good</div>
        <div>
          <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
          <span>{hotel.address}</span>
        </div>
        <div>
          <span className="label label-default">Parking</span>
          <span className="label label-default">Wifi</span>
        </div>

        <div><span>{hotel.currency_symbol}{hotel.price}</span></div>

      </div>

    );
  }
}
export default HotelItemComponent;
