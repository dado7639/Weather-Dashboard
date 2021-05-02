// var dec for elements in the dom
var searchButton = document.getElementById("search-button");
var searchHistory = document.getElementById("search-history");
var searchVal = document.getElementById("search-value");
var currentWeather = document.getElementById("current-weather");
var futureWeather = document.getElementById("future-weather");

var searchHistArray = [];

var weatherApi = "30294155ca94b96aa200f93e1787a028";

// funciton to get API
// how do i differntiate this for getWEater
function getApi() {
  var searchedCity = searchVal.value.trim();
  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchedCity +
    "&appid=" +
    weatherApi;

  fetch(weatherUrl)
    //whatever comes back from the api is stored in the variable response
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// user inputs city in search bar
// run function that gets that cities weather
function getWeather() {
  getApi();
  // get the actual weather from the api

  // how to pull from getApi function
  var temp;
  var wind;
  var humidity;
  var uvIndex;
}

// function that populates the current weather card
function populateCurrent() {
  // WHEN I view the UV index
  // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
}

//function that populates future weather cards
function populateFuture() {}

//save users search history
function saveHistory() {
  // get value for search history
  // add search value to history array
  // populate array to the ul "search-history"
}

// event
searchButton.addEventListener("click", getWeather);
