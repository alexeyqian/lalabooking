import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import HotelRoomTypeComponent from './HotelRoomTypeComponent';
import HotelRoomListComponent from './HotelRoomListComponent';
import RoomTypeDetailComponent from './RoomTypeDetailComponent';
import RoomDetailComponent from './RoomDetailComponent';
import MiniExpandableComponent from './MiniExpandableComponent';

class HotelRoomTypeListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      modalTitle: 'UNKNOWN',
      modalType: '',
      currentRoomType: {},
      currentRoom: {}
    };

    //this.openModal = this.open.bind(this);
    this.openRoomTypeModal = this.openRoomTypeModal.bind(this);
    this.openRoomModal = this.openRoomModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  openRoomTypeModal(roomTypeId) {

    function findRoomType(rt) {
      return rt.id === roomTypeId;
      }
    let roomType = this.props.roomTypes.find(findRoomType);
    //alert(JSON.stringify(roomType));
    this.setState({ showModal: true, currentRoomType: roomType, modalTitle: roomType.name, modalType: 'roomTypeDetail' });
  }

  getRoomFromData(roomData, roomId)
  {
    let tempRoom = null;
    roomData.forEach(function(roomType) {
        roomType.rooms.forEach(function(r){
          if(r.id == roomId)
            tempRoom = r;
        });
    });

    return tempRoom;
  }

  openRoomModal(roomId) {
    const room = this.getRoomFromData(this.props.roomTypes, roomId);
    if(!room) return;
    //alert(JSON.stringify(room));
    this.setState({ showModal: true, currentRoom: room, modalTitle: room.name, modalType: 'roomDetail'});
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
    //const self = this;
    const roomTypeComponentList = this.props.roomTypes.map((roomType) => {

      let aComponent = <div><HotelRoomTypeComponent roomType={roomType} onShowDetail={this.openRoomTypeModal} /></div>;
      let bComponent = <HotelRoomListComponent rooms = {roomType.rooms}  onShowDetail={this.openRoomModal}  />;
      return (
      <li key={roomType.id} className='hotel-room-type-wrapper'>
        <MiniExpandableComponent a = {aComponent} b = {bComponent}/>
      </li>
      );
    });

    const roomTypeModalBody = <RoomTypeDetailComponent roomType = {this.state.currentRoomType}/>
    const roomModalBody = <RoomDetailComponent room = {this.state.currentRoom}/>
    let modalBody = {};
    switch (this.state.modalType) {
      case 'roomTypeDetail':
        modalBody = roomTypeModalBody;
        break;
        case 'roomDetail':
          modalBody = roomModalBody;
          break;
      default:
        modalBody = roomTypeModalBody;
    }

    const modal =
      <Modal show={this.state.showModal} onHide={this.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {modalBody}
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
