import React from 'react';

class HotelRoomComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleShowDetail(roomId) {
      //alert('click room name: id: ' + roomId);
      this.props.onShowDetail(roomId);
  }

  render() {

    const room = this.props.room;
    return (

      <div id={'room-'+room.id} className="hotel-room">
        <div className='name' onClick={() => this.handleShowDetail(room.id)}>{room.name}</div>
        <div>
          <i className='fa fa-coffee'></i>
          <span className='facility'>
            {room.isIncludeBreakfast? 'Breakfast included' : 'Breakfast not included'}
          </span>
          <i className='fa fa-bed'></i>
          <span className='facility'>
            {room.bed_type} {room.bed_number > 1? 'x' + room.bed_number : ''}
          </span>
          <i className='fa fa-users'></i>
          <span className='facility'>
            fits: {room.fits}
          </span>
        </div>
        <div>
          <i className='fa fa-money'></i>
          <span className='facility'>
            {room.isFreeCancellation? <span className='text-success'>Free cancellation</span> : <span className='text-danger'>Not free cancellation</span>}
          </span>
          <i className='fa fa-credit-card'></i>
          <span className='facility'>
            {room.isPrepayment? 'Prepeyment' : 'Pay at hotel'}
          </span>
        </div>

        <div>{room.freeCancellationBefore? 'Free cancellation before: ' + room.freeCancellationBefore : ''} </div>
        <div className='text-right'>
          <span className="price">{room.currency_symbel}{room.price}</span>
          <span className="book"><button className="btn btn-sm btn-warning">Book</button></span>
        </div>


      </div>

    );
  }
}
export default HotelRoomComponent;
