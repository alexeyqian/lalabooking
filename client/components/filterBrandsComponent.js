import React from 'react';

class FilterBrandsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {brands: []};
    this.isSelected = this.isSelected.bind(this);
  }

  toggleSelection(selection){
    // const activeClasses = [...this.state.activeClasses.slice(0, index),
    //   !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)];

    let tempSelections = this.state.stars.slice();

    const index = tempSelections.indexOf(selection);

    if(index >= 0)
      tempSelections.splice(index, 1);
    else
      tempSelections.push(selection);

    this.setState({brands: tempSelections});
  }

  isSelected(selection){
    return this.state.stars.includes(selection);
  }

  render() {

    return (

      <div className='filter-brands'>
        <h2>BRANDS</h2>

      </div>

    );
  }
}
export default FilterBrandsComponent;
