import React from 'react';

class RoomDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const room = this.props.room;
    return (

      <div id={'room-detail-'+room.id} className="room-detail">
        <div className='photo-slider'>
        </div>



      </div>

    );
  }
}
export default RoomDetailComponent;
