// var dec for elements in the dom
var searchButton = document.getElementById("search-button");
var searchHistory = document.getElementById("search-history");
var searchVal = document.getElementById("search-value");
var currentWeather = document.getElementById("current-weather");
var futureWeather = document.getElementById("future-weather");

var searchHistArray = [];

var weatherUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
var weatherApi = "30294155ca94b96aa200f93e1787a028";

// user inputs city in search bar
// run function that gets that cities weather
function getWeather() {
  // get value from users search
  var searched = searchVal.value.trim();
}

// function that populates the current weather card
function populateCurrent() {
  // WHEN I view the UV index
  // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
}

//function that populates future weather cards
function populateFuture() {}

//save users search history
function saveHistory() {}

// event
searchButton.addEventListener("click", getWeather);
