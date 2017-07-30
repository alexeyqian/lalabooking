
function initShortFullBlock(){
  $('.short-block, .full-block, short-full-block-arrow').click(function(){
    $(this).parent().toggleClass('active');
    $(this).toggleClass('hidden');
    $(this).siblings().removeClass('hidden');
  });
}


String.prototype.format = String.prototype.f = function () {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function updateUrlParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}

function removeUrlParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}

function showWorkingOnIt() {
    var working = '<div id="main-working-on-it">'
                + '    <i class="fa fa-3x fa-cog fa-spin"></i><span> Working on it ...</span>'
                + '</div>';
    $('#top-messages-bar').append(working);
}

function hideWorkingOnIt() {
    $('#top-messages-bar').remove('#main-working-on-it');
}

function showMessage(message, type) {
    var msg = '<div id="main-message" class="' + type + '">'
            + '    <p id="main-message-content">' + message +'</p>'
            + '</div>';

    $('#top-messages-bar').append(msg);
}

function parseGeoCoding(place) {
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

function saveGeoData(myGeoData) {
    var g = myGeoData;
    var saveGeoUrl = '/commonServices/saveGeoLocation?'
        + 'latitude=' + g.latitude + '&longitude=' + g.longitude
        + '&city=' + g.city + '&cityShortName=' + g.cityShortName + "&county=" + g.county
        + '&state=' + g.state + '&stateShortName=' + g.stateShortName
        + '&country=' + g.country + '&countryShortName=' + g.countryShortName;
    $.get(saveGeoUrl);
}

function getGeoDataFromLocal(input, cachedData) {
    var lat, lng, city, state, country, stateShortName;

    var arr = input.split(',');
    var length = arr.length;
    if (length >= 3) {
        country = arr[length - 1].trim();
        //stateShortName = arr[length - 2].trim().replace(/[0-9]/g, ''); // in case there are zipcode inside the input
        stateShortName = arr[length - 2].trim();
        city = arr[length - 3].trim();

        // if contains number, that means user input zipcode or more specific address than city.
        // then we need use google to find the geo location info.
        var containsNumber = /\d/.test(stateShortName);
        if (containsNumber)
            return null;

        for(i = 0;i < cachedData.length; i++)
        {
            var item = cachedData[i];
            if (stateShortName.length <= 2) // if it is short name
            {
                if (country == item.Country && stateShortName == item.StateShortName && city == item.City) {
                    lat = item.Lat;
                    lng = item.Lng;
                    state = item.State;
                    break;
                }
            }
            else // if it is full name
            {
                if (country == item.Country && stateShortName == item.State && city == item.City) {
                    lat = item.Lat;
                    lng = item.Lng;
                    state = item.State;
                    break;
                }
            }
        }
    }

    if (lat && lng)
        return { "latitude": lat, "longitude": lng, "country": country, "state": state, "city": city };
    else
        return null;
}

function getAddressUrlFromGeoData(myGeoData) {
    var a = myGeoData;
    var addressUrl = a.country + "/";
    if (a.state)
        addressUrl += a.state + "/";
    if (a.city)
        addressUrl += a.city + "/";
    if (a.neighborhood)
        addressUrl += a.neighborhood + "/";
    // remove last slash "/"
    addressUrl = addressUrl.substring(0, addressUrl.length - 1).replaceAll(' ', '-');
    return addressUrl;
}

function getAddressUrlFromString(destination)
{
    var city, state, country;

    var arr = destination.replace('-', ',').split(',');
    var length = arr.length;
    if (length <= 0)
        return '';

    if (length >= 1)
        country = arr[length - 1].trim();
    if (length >= 2)
        state = arr[length - 2].trim().replace(/[0-9]/g, '').trim(); // in case there are zipcode inside the input
    if (length >= 3)
        city = arr[length - 3].trim();

    var addressUrl = '';
    if (country)
        addressUrl = country + "/";
    if (state)
        addressUrl += state+ "/";
    if (city)
        addressUrl += city + "/";
    //if (a.neighborhood)
    //addressUrl += a.neighborhood + "/";

    // remove last slash "/"
    addressUrl = addressUrl.substring(0, addressUrl.length - 1).replaceAll(' ', '-').toLowerCase();
    return addressUrl;
}

// ========== google map ==================//
function extendGoogleMapApi() {
    google.maps.Map.prototype.markers = new Array();

    google.maps.Map.prototype.getMarkers = function () {
        return this.markers
    };

    google.maps.Map.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = new Array();
    };

    google.maps.Marker.prototype._setMap = google.maps.Marker.prototype.setMap;

    google.maps.Marker.prototype.setMap = function (map) {
        if (map) {
            map.markers[map.markers.length] = this;
        }
        this._setMap(map);
    }
}

function getBoundsRadius(bounds) {
    //var bounds = map.getBounds();

    // r = radius of the earth in km
    var r = 6378.8
    // degrees to radians (divide by 57.2958)
    var ne_lat = bounds.getNorthEast().lat() / 57.2958
    var ne_lng = bounds.getNorthEast().lng() / 57.2958
    var c_lat = bounds.getCenter().lat() / 57.2958
    var c_lng = bounds.getCenter().lng() / 57.2958
    // distance = circle radius from center to Northeast corner of bounds
    var d = r * Math.acos(
      Math.sin(c_lat) * Math.sin(ne_lat) +
      Math.cos(c_lat) * Math.cos(ne_lat) * Math.cos(ne_lng - c_lng)
      )
    return d * 1000 * 0.9 // radius in meters - 0.8 for remove markders too close to boundary
    //return d * 1000 * 1000; // return meters
}

function normalIcon() {
    return {
        url: '/content/img/marker-red.png'
    };
}

function highlightedIcon() {
    return {
        url: '/content/img/marker-green.png'
    };
}

/*
function getGeoLocationFromLocalDB_backup(input)
{
    var city, state, stateShortName, country;
    var lat, lng;
    var arr = input.split(',');
    if(arr.length == 3)
    {
        city = arr[0];
        state = arr[1];
        country = arr[2];

        var url = '/commonServices/GetGeoLocationForCity?x=1'
        + '&city=' + g.city
        + '&stateShortName=' + g.stateShortName
        + '&country=' + g.country;
        $.get(url, function (data) {
            if(data.success){
                lat = data.lat;
                lng = data.lng;
                state = data.state;
            }
        });
    }

    if (lat && lng)
        return { "lat": lat, "lng": lng, "country": country, "state":state, city:"city" };
    else
        return null;
}
*/
