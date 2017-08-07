import React from 'react';

class RoomTypeDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const roomType = this.props.roomType;
    return (

      <div id={'room-type-detail-'+roomType.id} className="room-type-detail">
        <div className='photo-slider'>
        </div>

        <div><span>Sqft</span> {roomType.min_sqft} - {roomType.max_sqft}</div>
        <div><span>Fits</span> {roomType.fits} people</div>
        <div><span>Floors</span> {roomType.floors} people</div>
        <div><span>Bed type</span> {roomType.bed_type}</div>
        <div><span>Bet Number</span> {roomType.bed_number}</div>
        <div><span>Add bed</span> {roomType.can_add_bed? 'Yes' : 'No'}</div>
        <div><span>Breadfast included</span> {roomType.is_include_breakfast? 'Yes' : 'No'}</div>
        <div><span>No Smoking</span> {roomType.is_no_smoking? 'Yes' : 'No'}</div>

      </div>

    );
  }
}
export default RoomTypeDetailComponent;
