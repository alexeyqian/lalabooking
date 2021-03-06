import React from 'react';

class FilterStarsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {stars: []};

    //this.toggleSelection = this.toggleSelection.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  toggleSelection(star){
    // const activeClasses = [...this.state.activeClasses.slice(0, index),
    //   !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)];

    let tempStars = this.state.stars.slice();

    const index = tempStars.indexOf(star);

    if(index >= 0)
      tempStars.splice(index, 1);
    else
      tempStars.push(star);

    //alert(JSON.stringify(tempStars));

    this.setState({stars: tempStars});
  }

  isSelected(star){
    return this.state.stars.includes(star);
  }

  render() {

    return (

      <div className='filter-items'>

        <span onClick={()=>this.toggleSelection(1)} className={this.isSelected(1)? "active" : "inactive"}>1 star</span>
        <span onClick={()=>this.toggleSelection(2)} className={this.isSelected(2)? "active" : "inactive"}>2 stars</span>
        <span onClick={()=>this.toggleSelection(3)} className={this.isSelected(3)? "active" : "inactive"}>3 stars</span>
        <span onClick={()=>this.toggleSelection(4)} className={this.isSelected(4)? "active" : "inactive"}>4 stars</span>
        <span onClick={()=>this.toggleSelection(5)} className={this.isSelected(5)? "active" : "inactive"}>5 stars</span>

      </div>

    );
  }
}
export default FilterStarsComponent;
