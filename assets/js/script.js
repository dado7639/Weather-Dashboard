//variable decleration
var searchButton = document.getElementById("searchButton");
var searchVal = document.getElementById("searchCity");
var currentCityName = document.getElementById("currentCityName");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHum = document.getElementById("currentHum");
var currentUV = document.getElementById("currentUV");
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var futureWeatherUrl = "";
var uvUrl = "";
var weatherApi = "30294155ca94b96aa200f93e1787a028";
var searchedCity;

function getCurrentWeather() {
  var weatherUrl =
    currentWeatherUrl + searchedCity + "&units=imperial&appid=" + weatherApi;

  fetch(weatherUrl)
    //whatever comes back from the api is stored in the variable response
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      weather = data;
      displayWeather();
    });
  //catch error if user types in wrong city
  // .catch(function (error) {})
}

function displayWeather() {
  // get the actual weather from the api
  console.log(weather);

  currentCityName.innerHTML = weather.name;
  currentTemp.innerHTML = "Temperature: " + weather.main.temp + " Fahrenheit";
  currentWind.innerHTML = "Wind: " + weather.wind.speed + " MPH";
  currentHum.innerHTML = "Humidity: " + weather.main.humidity + "%";

  var latitude = weather.coord.lat;
  console.log(latitude);
  var logitude = weather.coord.lon;
  console.log(logitude);
  // populate current weather box
}

searchButton.addEventListener("click", function () {
  searchedCity = searchVal.value.trim();
  console.log(searchedCity);
  getCurrentWeather();
});
