import React from 'react';

class BookInputPaymentInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div id='book-input-payment-info' className="book-input-payment-info">

        <form>
          <div className="form-group">
            <label htmlFor="name">Name on Card</label>
            <input type="text" className="form-control" id="name" placeholder="Name on Card" />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" className="form-control" id="cardNumber" placeholder="Card Number" />
          </div>

          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input type="text" className="form-control" id="expirationMonth" placeholder="Month" />
            <input type="text" className="form-control" id="expirationYear" placeholder="Year" />
          </div>

          <div className="form-group">
            <label htmlFor="securityCode">Security Code</label>
            <input type="text" className="form-control" id="securityCode" placeholder="Security Code" />
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
          </form>

      </div>

    );
  }
}
export default BookInputPaymentInfoComponent;
