import React from 'react';
import HotelRoomComponent from './HotelRoomComponent';

class HotelRoomListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowDetail = this.handleShowDetail.bind(this);
  }

  handleShowDetail(roomId) {
      //alert('room list handle: id: ' + roomId);
      this.props.onShowDetail(roomId);
  }

  render() {

    const roomComponentList = this.props.rooms.map((room) =>
      <li key={room.id}><HotelRoomComponent room={room} onShowDetail={this.handleShowDetail} /></li>
    );

    return (
      <ul className="hotel-room-list">{roomComponentList}</ul>
    );
  }
}
export default HotelRoomListComponent;
