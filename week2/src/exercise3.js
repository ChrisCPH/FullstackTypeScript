// Class exercise 3

const {Navigator} = require("node-navigator");
const navigator = new Navigator();

function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position);
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
}

function getLocationOld(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
    });
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeather(coords) {
    const apiKey = "API key";
    return new Promise(function(resolve, reject) {
        try {
            const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function() {
                if(req.status === 200) {
                    resolve(JSON.parse(req.responseText))
                } else {
                    reject(new Error(req.statusText))
                }
            }
            req.send();
        } catch (e) {
            reject(new Error(e))
        }
    })
}

function getWeatherOld(coords, callback) {
    const apiKey = "API key";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status === 200) {
            callback(JSON.parse(req.responseText));
        } else {
            callback(new Error(req.statusText));
        }
    };
    req.send();
}

//getLocation(function (coords) {
  //  getWeather(coords, function (weather) {
    //    console.log(weather);
    //});
//});

getLocation()
    .then((result) => {
        //console.log(result)
        getWeather(result)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    .catch((error) => {
        console.log(error)
    });

document.getElementById('weather').innerHTML = weather.main.temp;