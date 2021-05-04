//variable decleration
var searchButton = document.getElementById("searchButton");
var searchVal = document.getElementById("searchCity");
var currentCityName = document.getElementById("currentCityName");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHum = document.getElementById("currentHum");
var currentUV = document.getElementById("currentUV");
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var futureWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var uvUrl = "";
var weatherApi = "30294155ca94b96aa200f93e1787a028";
var searchedCity;
var currentWeather;
var futureWeather;

function getCurrentWeather() {
  var weatherUrl =
    currentWeatherUrl + searchedCity + "&units=imperial&appid=" + weatherApi;

  fetch(weatherUrl)
    //whatever comes back from the api is stored in the variable response
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentWeather = data;
      displayCurrentWeather();
    });
  //catch error if user types in wrong city
}
function getFutureWeather() {
  var weatherUrl =
    futureWeatherUrl + searchedCity + "&units=imperial&appid=" + weatherApi;

  fetch(weatherUrl)
    //whatever comes back from the api is stored in the variable response
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      futureWeather = data;
      displayFutureWeather();
    });
}

//still needs weather icon
function displayCurrentWeather() {
  // get the actual weather from the api
  console.log(currentWeather);

  currentCityName.innerHTML = currentWeather.name;
  currentTemp.innerHTML =
    "Temperature: " + currentWeather.main.temp + " Fahrenheit";
  currentWind.innerHTML = "Wind: " + currentWeather.wind.speed + " MPH";
  currentHum.innerHTML = "Humidity: " + currentWeather.main.humidity + "%";

  var latitude = currentWeather.coord.lat;
  console.log(latitude);
  var logitude = currentWeather.coord.lon;
  console.log(logitude);
  // populate current weather box
}

function displayFutureWeather() {
  console.log(futureWeather.list.length);

  //length of future weather array... 40 spots... weather for every 3 hours
  for (i = 0; i < futureWeather.list.length; i++) {}
}

searchButton.addEventListener("click", function () {
  searchedCity = searchVal.value.trim();
  getCurrentWeather();
  getFutureWeather();
});
