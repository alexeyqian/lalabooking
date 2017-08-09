import React from 'react';

class MiniStepsBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const self = this;
    const componentList = this.props.stepsData.steps.map((step, index) =>
      <li className={self.props.stepsData.currentIndex == index ? 'active' : ''} key={index}>
        <a href='#'>{step.text}</a>
      </li>
    );

    return (
      <div className='mini-steps-bar-container'>
      <ul>
        {componentList}
      </ul>
      </div>

    );
  }
}
export default MiniStepsBarComponent;
