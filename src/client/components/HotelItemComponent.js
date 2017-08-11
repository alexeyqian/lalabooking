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

        <img className='hotelImage' src={hotel.photo} />
        <h4>{hotel.name}</h4>

        <div>
          <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
          <span>{hotel.address}</span>
        </div>

        <div className="facility">

          <span className="label label-default">7</span><span>Good</span>
          <i className="fa fa-car" aria-hidden="true"></i><span>Parking</span>
          <i className="fa fa-wifi" aria-hidden="true"></i><span>Wifi</span>
          <i className="fa fa-car" aria-hidden="true"></i><span>Bar</span>

        </div>

        <div className="price">{hotel.currency_symbol}{hotel.price}</div>
        <div className="booknow"><button className="btn btn-warning">Book Now</button></div>

      </div>

    );
  }
}
export default HotelItemComponent;
