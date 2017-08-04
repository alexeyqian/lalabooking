import React from 'react';
import HotelRoomTypeComponent from './HotelRoomTypeComponent';
import HotelRoomListComponent from './HotelRoomListComponent';

class HotelRoomTypeListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const roomTypeComponentList = this.props.roomTypes.map((roomType) =>
      <li key={roomType.id} className='hotel-room-type-wrapper'>
        <div><HotelRoomTypeComponent roomType={roomType} /></div>
        <HotelRoomListComponent rooms = {roomType.rooms} />
      </li>
    );

    return (
      <ul className="hotel-room-type-list">{roomTypeComponentList}</ul>
    );
  }
}
export default HotelRoomTypeListComponent;
