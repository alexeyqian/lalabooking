import React from 'react';

class HotelRoomComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const room = this.props.room;
    return (

      <div id={'room-'+room.id} className="hotel-room">
        <h4>{room.name}</h4>
        <div>
          <span className='label label-default'>
            {room.isIncludeBreakfast? 'Breakfast included' : 'Breakfast not included'}
          </span>
          <span className='label label-default'>
            {room.bed_type} {room.bed_number > 1? ' x ' + room.bed_number : ''}
          </span>
          <span className='label label-default'>
            fits: {room.fits} people
          </span>
        </div>
        <div>
          <span className='label label-default'>
            {room.isFreeCancellation? 'Free cancellation' : 'Not free cancellation'}
          </span>
          <span className='label label-default'>
            {room.isPrepayment? 'Prepeyment' : 'Pay at hotel'}
          </span>
        </div>

        <div>{room.freeCancellationBefore? 'Free cancellation before: ' + room.freeCancellationBefore : ''} </div>

        <div className="price">{room.currency}{room.price}</div>
        <div className="booknow"><button className="btn btn-warning">Book Now</button></div>

      </div>

    );
  }
}
export default HotelRoomComponent;
