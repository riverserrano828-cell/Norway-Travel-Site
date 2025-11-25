/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

function showLocation(){
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
    else
        document.getElementById('results').innerHTML = "Geolocation Not Supported";
}
function successCallback(position){
    document.getElementById('results').innerHTML = "Latitude: " +
            position.coords.latitude + "<br>Longitude: " +
            position.coords.longitude;
}
function errorCallback(err){
    switch(err.code) {
        case err.PERMISSION_DENIED:
            document.getElementById('results').innerHTML = "Permission Denied";
            break;
        case err.POSITION_UNAVAILABLE:
            document.getElementById('results').innerHTML = "Position Unavailabe";
            break;
        case err.TIMEOUT:
            document.getElementById('results').innerHTML = "Request Timed Out";
            break;
        case err.UNKNOWN_ERROR:
            document.getElement('results').innerHTML = "Unknown Error";
    }
}
