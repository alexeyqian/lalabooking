import React from 'react';

class HotelRoomTypeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleShowDetail(roomTypeId) {
      this.props.onShowDetail(roomTypeId);
  }

  render() {

    const roomType = this.props.roomType;
    return (

      <div id={'room-type-'+roomType.id} className="hotel-room-type">
        <div className="clearfix">
          <div className="column left" onClick={() => this.handleShowDetail(roomType.id)}>
            <img src={roomType.photo} width='100%' height='100%' />
          </div>

          <div className="column right">
            <div className='name'>{roomType.name}</div>
            <div>
              <span className='facility'>
                {roomType.max_sqft} sqft
              </span>
              <span className='facility'>
                {roomType.bed_type} {roomType.bed_number > 1 ? ' x ' + roomType.bed_number : ''}
              </span>
              <span className='facility'>
                Floors: 2, 3, 15
              </span>
            </div>

            <div className="price">From: {roomType.currency_symbel}{roomType.price}</div>

          </div>
        </div>



      </div>

    );
  }
}
export default HotelRoomTypeComponent;
