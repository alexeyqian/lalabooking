import React from 'react';

import FilterPriceRangeComponent from './FilterPriceRangeComponent';
import FilterStarsComponent from './FilterStarsComponent';
import FilterBrandsComponent from './FilterBrandsComponent';
import FilterThemesComponent from './FilterThemesComponent';

class FiltersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentTab: 'priceRangeTab'};
  }

  selectTab(tab){
    this.setState({currentTab: tab});
  }

  render() {
    let currentFilter = <FilterPriceRangeComponent />;
    switch (this.state.currentTab) {
      case 'starsTab':
        currentFilter = <FilterStarsComponent />
        break;
      case 'brandsTab':
        currentFilter = <FilterBrandsComponent />
        break;
      case 'themesTab':
        currentFilter = <FilterThemesComponent />
        break;
      default:
        currentFilter = <FilterPriceRangeComponent />;
        break;
    }

    return (

      <div className='filters-panel'>

        <div className="header text-right">
          <span className='h4'>x</span>
        </div>

        <div className="clearfix">

          <div className="column menu">
            <ul>
              <li onClick={()=>this.selectTab('priceRangeTab')} className={this.state.currentTab === 'priceRangeTab'? "active" : "inactive"}>Price</li>
              <li onClick={()=>this.selectTab('starsTab')} className={this.state.currentTab === 'starsTab'? "active" : "inactive"}>Stars</li>
              <li onClick={()=>this.selectTab('brandsTab')} className={this.state.currentTab === 'brandsTab'? "active" : "inactive"}>Brands</li>
              <li onClick={()=>this.selectTab('themesTab')} className={this.state.currentTab === 'themesTab'? "active" : "inactive"}>Themes</li>
              <li onClick={()=>this.selectTab('facilitiesTab')} className={this.state.currentTab === 'facilitiesTab'? "active" : "inactive"}>Facilities</li>
              <li onClick={()=>this.selectTab('policiesTab')} className={this.state.currentTab === 'policiesTab'? "active" : "inactive"}>Policies</li>
            </ul>
          </div>

          <div className="column content">
            {currentFilter}
          </div>

        </div>

        <div className="footer text-right">
          <button className='btn btn-default'>Cancel</button>
          <button className='btn btn-primary'>Apply</button>
        </div>

      </div>

    );
  }
}
export default FiltersComponent;
