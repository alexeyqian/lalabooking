import React from 'react';

class HotelRoomTypeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const roomType = this.props.roomType;
    return (

      <div id={'room-type-'+roomType.id} className="hotel-room-type">
        <h4>{roomType.name}</h4>
        <div>
          <span className='label label-default'>
            200 sqft
          </span>
          <span className='label label-default'>
            {roomType.bed_type} {roomType.bed_number > 1 ? ' x ' + roomType.bed_number : ''}
          </span>
          <span className='label label-default'>
            Floor: 2, 3, 15
          </span>
        </div>

        <div className="price">From: {roomType.currency}{roomType.price}</div>

      </div>

    );
  }
}
export default HotelRoomTypeComponent;
