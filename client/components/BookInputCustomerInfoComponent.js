import React from 'react';
import MiniStepsBarComponent from './MiniStepsBarComponent';

class BookInputCustomerInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stepsData = {
      currentIndex: 0,
      steps: [
        {text: 'first step'},
        {text: 'second step'},
        {text: 'last step'},
      ]
    };
    return (
      <div>

      <MiniStepsBarComponent stepsData = {stepsData} />

      <div id='book-input-customer-info' className="book-input-customer-info">

        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox"/> Checkbox
            </label>
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
          </form>

      </div>

      </div>

    );
  }
}
export default BookInputCustomerInfoComponent;
