import React from 'react';
import HotelRoomComponent from './HotelRoomComponent';

class HotelRoomListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const roomComponentList = this.props.rooms.map((room) =>
      <li key={room.id}><HotelRoomComponent room={room} /></li>
    );

    return (
      <ul className="hotel-room-list">{roomComponentList}</ul>
    );
  }
}
export default HotelRoomListComponent;
