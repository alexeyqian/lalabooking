import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
class HomeSearchComponent extends React.Component {
  constructor(props) {
    super(props);

    // const today = new moment();
    // const tomorrow = moment().add(1, 'days');
    //
    // this.state = {
    //   checkin: today,
    //   checkout: tomorrow,
    //   adults: 2,
    //   children: 0
    // };
    //
    // this.handleChangeCheckin = this.handleChangeCheckin.bind(this);
    // this.handleChangeCheckout = this.handleChangeCheckout.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const google = window.google;
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('destination'));
  }

  componentWillUnmount() {}

  handleChangeCheckin(date) {
    this.setState({
      checkin: date
    });
  }

  handleChangeCheckout(date) {
    this.setState({
      checkout: date
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    //alert(`destination: ${this.destination.value}, sleeps: ${this.state.sleeps}, isTripping: ${this.state.isTripping}, checkin: ${this.state.startDate.format('YYYY-MM-DD')}, checkout: ${this.state.endDate.format('YYYY-MM-DD')}`);
    //event.preventDefault();

    const addressUrl = this.getAddressUrlFromString(this.destination.value);
    var parameters = this.getQueryParameters(this.state);
    var url = window.location.protocol + '//' + window.location.host + '/search/' + addressUrl + parameters;
    alert(url);
    //window.location.href = url;
  }

  getQueryParameters(s) {
    var parameters = '';

      if (s.checkin) {
        parameters += '&checkin=' + s.checkin.format('YYYY-MM-DD');
      }

      if (s.checkout) {
        parameters += '&checkout=' + s.checkout.format('YYYY-MM-DD');
      }

      if (s.adults) {
        parameters += '&adults=' + s.adults;
      }

      if (s.children) {
        parameters += '&children=' + s.children;
      }

    if (parameters) {
      parameters = '?' + parameters.substring(1);
    }

    return parameters;
  }

  getPlaceObject(s, d){

    const destination = d;
    let city;
    let state;
    let country;
    let location;

    const arr = destination.split(',');
    const length = arr.length;
    if (length <= 0) {
      return '';
    }

    if (length >= 1) {
      country = arr[length - 1].trim();
    }
    if (length >= 2) {
      state = arr[length - 2].trim().replace(/[0-9]/g, '');
    } // in case there are zipcode inside the input
    if (length >= 3) {
      city = arr[length - 3].trim();
    }

    location = city;
    if (!location) {
      location = state;
    }
    if (!location) {
      location = country;
    }

    location = location.replace(' ', '+');

    return {country: country, state: state, city: city, location: location};
  }

  getAddressUrlFromString(des) {
    //alert(des);
    let city;
    let state;
    let country;

    const arr = des.replace('-', ',').split(',');
    const length = arr.length;
    if (length <= 0) {
      return '';
    }

    if (length >= 1) {
      country = arr[length - 1].trim();
    }
    if (length >= 2) {
      state = arr[length - 2].trim().replace(/[0-9]/g, '').trim();
    } // in case there are zipcode inside the input
    if (length >= 3) {
      city = arr[length - 3].trim();
    }

    let addressUrl = '';
    if (country) {
      addressUrl = country + "/";
    }
    if (state) {
      addressUrl += state + "/";
    }
    if (city) {
      addressUrl += city + "/";
    }
    //if (a.neighborhood)
    //addressUrl += a.neighborhood + "/";
    //  alert(addressUrl);
    // remove last slash "/" "China/shanghai
    //addressUrl = addressUrl.substring(0, addressUrl.length - 1).replaceAll(' ', '-').toLowerCase();
    //addressUrl = addressUrl.replaceAll(' ', '-').toLowerCase();
    //http://localhost:3000/search/china/shanghai/?checkin=2017-07-23&checkout=2017-07-24&adults=2
    return addressUrl.toLowerCase();
  }

  render() {

    return (
      <div className="form text-left">

        <div className="col-xs-12 col-md-3 form-group">
            <label htmlFor="destination">Destination</label>
            <input type="text" className="form-control" id="destination" name="destination" ref={(input) => this.destination = input} placeholder="Where to?" tabIndex="3"/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 form-group">
            <label htmlFor="checkin">Check-in</label>
            <DatePicker selected={this.state.checkin}
              selectsStart
              startDate={this.state.checkin}
              endDate={this.state.checkout}
              onChange={this.handleChangeCheckin}
              className="form-control"
              placeholderText='Check in (optional)'  tabIndex="4"/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 form-group">
            <label htmlFor="checkout">Check-out</label>
            <DatePicker selected={this.state.checkout}
              selectsEnd
              startDate={this.state.checkin}
              endDate={this.state.checkout}
              onChange={this.handleChangeCheckout}
              className="form-control"
              placeholderText='Check out'  tabIndex="5"/>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2 form-group">
            <label htmlFor="adults">Adults</label>
            <select className="form-control" name="adults" value={this.state.adults} onChange={this.handleInputChange}  tabIndex="6">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2 form-group">
            <label htmlFor="children">Children</label>
            <select className="form-control" name="children" value={this.state.children} onChange={this.handleInputChange}  tabIndex="6">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-1 form-group">
            <button id="search" name="search" className="btn btn-warning form-control" type="button" onClick={this.handleSubmit}  tabIndex="8">Search</button>
        </div>

      </div>
    );
  }
}
export default HomeSearchComponent;
