import React from 'react';

class RoomTypeDetailomponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const roomType = this.props.roomType;
    return (

      <div id={'room-type-detail-'+roomType.id} className="room-type-detail">

        

      </div>

    );
  }
}
export default RoomTypeDetailComponent;
