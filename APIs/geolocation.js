var displayString = '';

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(displayPosition,displayError);
} else {
    document.getElementById('location'),innerHTML = 'Geolocation is not supported.'
}

function displayPosition(position) {
    displayString = 'The user\'s current position is:<br>Latitude: ' + 
        position.coords.latitude + '<br>Longitude: ' + position.coords.longitude +
        '<br><a href="https://www.google.com/maps/place/@26.0765155,-80.2454671,17z" target="_blank">Google Map</a>';
    document.getElementById('location').innerHTML = displayString;
}

function displayError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            displayString = 'Permision denied for Geolocation request by user.';
            break;
        case error.POSITION_UNAVAILABLE:
            displayString = 'Geolocation information unavailable.';
            break;
        case error.TIMEOUT:
            displayString = 'Geolocation request timed out.';
            break;
        case error.UNKNOWN_ERROR:
            displayString = 'An unknown error has occurred.'
    }
    if (displayString != '') {
        document.getElementById('location').innerHTML = displayString;
    }
}

