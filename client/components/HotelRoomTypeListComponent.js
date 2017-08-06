import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import HotelRoomTypeComponent from './HotelRoomTypeComponent';
import HotelRoomListComponent from './HotelRoomListComponent';

class HotelRoomTypeListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      modalTitle: 'UNKNOWN',
      currentRoomType: {},
      currentRoom: {}
    };

    //this.openModal = this.open.bind(this);
    this.openRoomTypeModal = this.openRoomTypeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // openModal() {
  //   this.setState({ showModal: true });
  // }

  openRoomTypeModal(roomTypeId) {

    function findRoomType(rt) {
      return rt.id === roomTypeId;
      }
    let roomType = this.props.roomTypes.find(findRoomType);
    //alert(JSON.stringify(roomType));
    this.setState({ showModal: true, currentRoomType: roomType, modalTitle: roomType.name });
  }

  getRoomFromData(roomId)
  {
    this.props.roomTypes.forEach(function(roomType) {
        roomType.rooms.forEach(function(r){
          if(r.id === roomId) return r;
        });
    });
    return {};
  }

  openRoomModal(roomId) {

    let room = getRoomFromData(roomId);
    alert(JSON.stringify(room));
    this.setState({ showModal: true, currentRoom: room, modalTitle: room.name });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

  }

  handleCancel() {
    this.setState((prevState, props) => ({
      showModal: false,
    }));
  }

  render() {

    const roomTypeComponentList = this.props.roomTypes.map((roomType) =>
      <li key={roomType.id} className='hotel-room-type-wrapper'>
        <div><HotelRoomTypeComponent roomType={roomType} onShowDetail={this.openRoomTypeModal} /></div>
        <HotelRoomListComponent rooms = {roomType.rooms}  onShowDetail={this.openRoomModal}  />
      </li>
    );

    const roomTypeModalBody = <div>ROOM TYPE DETAIL: {this.state.currentRoomType.id}</div>

    const modal =
      <Modal show={this.state.showModal} onHide={this.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {roomTypeModalBody}
          </div>
        </Modal.Body>
      </Modal>

    return (
      <div>
      <ul className="hotel-room-type-list">{roomTypeComponentList}</ul>
      {modal}
      </div>
    );
  }
}
export default HotelRoomTypeListComponent;
