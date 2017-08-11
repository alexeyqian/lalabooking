import React from 'react';

class FilterBrandsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedItems: []};
    this.isSelected = this.isSelected.bind(this);
  }

  toggleSelection(item){

    let tempSelectedItems = this.state.selectedItems.slice();

    const index = tempSelectedItems.indexOf(item);

    if(index >= 0)
      tempSelectedItems.splice(index, 1);
    else
      tempSelectedItems.push(item);

    this.setState({selectedItems: tempSelectedItems});
  }

  isSelected(item){
    return this.state.selectedItems.includes(item);
  }

  render() {
    const items = [
      {name: 'jing_jiang', display_name: 'Jing Jiang'},
      {name: 'hilton', display_name: 'Hilton'},
      {name: 'han_ting', display_name: 'Han Ting'},
      {name: 'ru_jia', display_name: 'Ru Jia'},
    ];

    const itemComponents = items.map((item) =>
      <span key={item.name} onClick={()=>this.toggleSelection(item.name)}
        className={this.isSelected(item.name)? "active" : "inactive"}>
        {item.display_name}
      </span>
    );

    return (

      <div className='filter-items'>
        {itemComponents}
      </div>

    );
  }
}
export default FilterBrandsComponent;
