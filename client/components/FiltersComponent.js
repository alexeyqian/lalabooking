import React from 'react';

class FiltersComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className='filterPanel container'>
        <div className='row'>
          <div className='col-xs-4'>
            <ul className="nav nav-stacked">
              <li className="active"><a href="#">Price</a></li>
              <li><a href="#">Stars</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Themes</a></li>
              <li><a href="#">Facilities</a></li>
              <li><a href="#">Policies</a></li>
            </ul>
          </div>
          <div className='col-xs-8'>

          </div>
        </div>

      </div>

    );
  }
}
export default FiltersComponent;
