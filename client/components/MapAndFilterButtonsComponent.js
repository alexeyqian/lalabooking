import React from 'react';
import moment from 'moment';

class MapAndFilterButtonsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hotel = this.props.hotel;
    return (

      <div className="mapAndFilterButtons">

        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <a className='btn btn-default'>
            <i className="fa fa-map-marker" aria-hidden="true"></i><span>Map</span>
          </a>
          <a className='btn btn-default'>
            <i className="fa fa-sort" aria-hidden="true"></i><span>Sort by</span>
          </a>
          <a className='btn btn-default'>
            <i className="fa fa-filter" aria-hidden="true"></i><span>Filter</span>
          </a>
        </div>

    </div>

    );
  }
}
export default MapAndFilterButtonsComponent;
