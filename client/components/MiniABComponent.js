import React from 'react';
import classNames from 'classnames';

class MiniABComponent extends React.Component {
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
      'active': !this.state.isB
    });

    const bClasses = classNames({
      'b': true,
      'active': this.state.isB
    });

    let arrow = '▼';
    if(this.state.isB)
      arrow = '▲';

    return (
      <div className='mini-ab-container'>
        <div className='arrow' onClick={() => this.toggleB()}>{arrow}</div>
        <div className={aClasses}>{this.props.a}</div>
        <div className={bClasses}>{this.props.b}</div>
      </div>

    );
  }
}
export default MiniABComponent;
