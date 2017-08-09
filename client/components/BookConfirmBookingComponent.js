import React from 'react';

class BookConfirmBookingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div id='book-customer-info' className="book-customer-info">

        <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email">
          </div>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name">
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name">
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox"> Checkbox
            </label>
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
          </form>

      </div>

    );
  }
}
export default BookConfirmBookingComponent;
