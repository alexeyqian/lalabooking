import React from 'react';

class FilterPriceRangeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedItems: []};
    this.isSelected = this.isSelected.bind(this);
  }

  toggleSelection(item){
    this.setState({selectedItems: item});
  }

  isSelected(item){
    return this.state.selectedItems.includes(item);
  }

  render() {
    const items = [
      {name: '0-100', display_name: '0 - 100'},
      {name: '100-200', display_name: '100 - 200'},
      {name: '200-300', display_name: '200 - 300'},
      {name: '300-400', display_name: '300 - 400'},
      {name: '400-500', display_name: '400 - 500'},
      {name: '500-9999', display_name: '500 +'},
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
export default FilterPriceRangeComponent;
