import React from 'react';
import classNames from 'classnames';

class MiniExpandableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isB: false};
  }

  toggleB(){
    this.setState({isB: !this.state.isB});
  }

  render() {
    const aClasses = classNames({
      'a': true,
      'active': true
    });

    const bClasses = classNames({
      'b': true,
      'active': this.state.isB
    });

    let arrow = <i className='fa fa-chevron-down'></i>;
    if(this.state.isB)
      arrow = <i className='fa fa-chevron-up'></i>;

    return (
      <div className='mini-expandable-container'>
        <div className='arrow' onClick={() => this.toggleB()}>{arrow}</div>
        <div className={aClasses}>{this.props.a}</div>
        <div className={bClasses}>{this.props.b}</div>
      </div>

    );
  }
}
export default MiniExpandableComponent;
