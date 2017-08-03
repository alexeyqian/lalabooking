import React from 'react';

class FilterThemesComponent extends React.Component {
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
      {name: 'theme1', display_name: 'theme 1'},
      {name: 'theme2', display_name: 'theme 2'},
      {name: 'theme3', display_name: 'theme 3'},
      {name: 'theme4', display_name: 'theme 4'},
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
export default FilterThemesComponent;
