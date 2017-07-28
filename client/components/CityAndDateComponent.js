import React from 'react';
import moment from 'moment';
import { Button, Modal } from 'react-bootstrap';

class CityAndDateComponent extends React.Component {
  constructor(props) {
    super(props);

    const place = this.getPlaceFromUrl();
    if(!place.city) return null;

    const urlVars = this.getUrlVars();
    const initCheckin = urlVars['checkin']?moment(urlVars['checkin'], "YYYY-MM-DD") : moment();
    const initCheckout = urlVars['checkout']?moment(urlVars['checkout'], "YYYY-MM-DD") : moment().add(1, 'days');
    const initAdults = urlVars['adults'] || '';
    const initChildren = urlVars['children'] || '';

    this.prevStateX = {
        showModal: false,
        country: place.country,
        state: place.state,
        city: place.city,
        checkin: initCheckin,
        checkout: initCheckout,
        adults: initAdults,
        children: initChildren
    };

    this.state = {
        showModal: false,
        country: place.country,
        state: place.state,
        city: place.city,
        checkin: initCheckin,
        checkout: initCheckout,
        adults: initAdults,
        children: initChildren
    };

    //Object.assign(this.prevStateX, this.state);

    this.initGoogleMap = this.initGoogleMap.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.open = this.open.bind(this);
    //this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }

  componentDidMount() {}

  componentWillUnmount() {}

  initGoogleMap(){
    const google = window.google;
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('destination'));

    const reactThis = this;
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      const p = reactThis.parseGeoCoding(place);

      reactThis.setState({
        country: p.country,
        state: p.state,
        city: p.city
      });

    });
  }

  parseGeoCoding(place) {
      var streetNumber = '', street = '', neighborhood = '', city = '', cityShortName = '',
          county='', state='', stateShortName='', zipcode='', country='', countryShortName='';
      var lat = place.geometry.location.lat();
      var lng = place.geometry.location.lng();

      var geos = place.address_components;
      var arrayLength = place.address_components.length;
      for (var i = 0; i < arrayLength; i++) {
          var geotype = geos[i].types[0];

          switch (geotype) {
              case "street_number":
                  streetNumber = geos[i].long_name;
                  break;
              case "route":
                  street = geos[i].long_name;
                  break;
              case "neighborhood":
                  neighborhood = geos[i].long_name;
                  break;
              case "locality":
                  city = geos[i].long_name;
                  cityShortName = geos[i].short_name;
                  break;
              case "administrative_area_level_2":
                  county = geos[i].long_name;
                  break;
              case "administrative_area_level_1":
                  state = geos[i].long_name;
                  stateShortName = geos[i].short_name;
                  break;
              case "postal_code":
                  zipcode = geos[i].long_name;
                  break;
              case "country":
                  country = geos[i].long_name;
                  countryShortName = geos[i].short_name;
                  break;
              default:
                return null;
                  //console.log("Sorry, we are out of " + expr + ".");
          }
      }

      return {
          "latitude": lat, "longitude": lng,
          "streetNumber": streetNumber, "street": street, "neighborhood": neighborhood,
          "city": city, "cityShortName": cityShortName, "county": county,
          "state": state, "stateShortName": stateShortName, "zipcode": zipcode,
          "country": country, "countryShortName":countryShortName
      };
    }

  getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
  }

  getPlaceFromUrl(){
    const arr = window.location.pathname.toLowerCase().substring(1).split('/');
    //alert(window.location.pathname.toLowerCase().substring(1));
    // ex: china/anhui/wuwei
    if(arr.length == 3)
      return {country: arr[1], state: arr[2], city: arr[3]};
    else if(arr.length == 4)
      return {country: arr[1], state: arr[2], city: arr[2]};
    else
      return {};
  }

  getDestinationFromPlace(place){
    return `${place.city}, ${place.state}, ${place.country}`;
  }

  //close() {
  //  this.setState({ showModal: false });
  //},

  open() {
    this.setState({ showModal: true });
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
    var path = '/rentals/';
    if(window.location.pathname.startsWith('/rentalsmap/'))
      path = '/rentalsmap/';
    var url = window.location.protocol + '//' + window.location.host + path
      + this.state.country + '/' + this.state.state + '/' + this.state.city
    url = url.toLowerCase().replaceAll(' ', '-').replaceAll('%20', '-');
    url += '?rentalType=' + this.state.rentalType;

    //var urlVars = getUrlVars();

    //if(urlVars['lat'])
    //  url += '&lat='+ urlVars['lat'];
    //if(urlVars['lng'])
    //  url += '&lng='+ urlVars['lng'];
    //alert(url);
    window.location.href = url;
  }

  handleCancel() {
    this.setState((prevState, props) => ({
      showModal: false,
      country: this.prevStateX.country,
      state: this.prevStateX.state,
      city: this.prevStateX.city,
      checkin: this.prevStateX.checkin,
      checkout: this.prevStateX.checkout,
      adults: this.prevStateX.adults,
      children: this.prevStateX.children
    }));


  }

  render() {
    const nights = this.state.checkout.diff(this.state.checkin, 'days');
    return (

      <div>

        <div onClick={this.open} className="cityAndDate">

          <div className="margin-bottom-5 h4">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            <span className="capitalize">{this.state.city}</span>
          </div>

          <div className="">
            <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            <span className='margin-right-5'>{this.state.checkin.format('MMM DD')} - {this.state.checkout.format('MMM DD')}</span>
            <span className='margin-right-5'>({nights} nights)</span>
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
            <span className='margin-right-5'>{this.state.adults} adults</span>
            <span className={this.state.children?'':'hidden'}>{this.state.children} children</span>
            <span className="label label-default margin-left-5">Edit</span>
          </div>

        </div>

        <Modal show={this.state.showModal} onHide={this.handleCancel} onEnter={this.initGoogleMap}>
          <Modal.Header closeButton>
            <Modal.Title>Change City</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4">
                <label for="destination">City</label>
                <input type="text" className="form-control" id="destination" name="destination" ref={(input) => this.destination = input} placeholder="Input City" tabIndex="1"/>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 margin-top-5">
                <label for="rentalType">Rental Type</label>
                <select className="form-control" id='rentalType' name='rentalType' value={this.state.rentalType} onChange={this.handleInputChange} tabIndex="2">
                    <option value="residential">Residential</option>
                    <option value="vacation">Vacation</option>
                </select>
              </div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="col-xs-12">
            <Button onClick={this.handleCancel}>Cancel</Button>
            <Button onClick={this.handleSubmit}>OK</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>

    );
  }
}
export default CityAndDateComponent;
