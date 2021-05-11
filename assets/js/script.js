//variable decleration
var searchButton = document.getElementById("searchButton");
var searchVal = document.getElementById("searchCity");
var currentCityName = document.getElementById("currentCityName");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHum = document.getElementById("currentHum");
var currentUV = document.getElementById("currentUV");
var forecastDiv = document.getElementById("forecast");
var searchHist = document.getElementById("searchHist");
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var futureWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?";
var weatherApi = "30294155ca94b96aa200f93e1787a028";
var oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=";
var searchedCity;
var lat;
var long;
var date = moment().format("MMM Do, YYYY");
var currentWeather;
var futureWeather;
var uvIndex;
var histArray = [];

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
      console.log(currentWeather);
      getFutureAndUv();
    });
  //catch error if user types in wrong city
}
// function getFutureWeather() {
//   var weatherUrl =
//     futureWeatherUrl + searchedCity + "&units=imperial&appid=" + weatherApi;

//   fetch(weatherUrl)
//     //whatever comes back from the api is stored in the variable response
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       futureWeather = data;
//       displayFutureWeather();
//     });
// }

function getFutureAndUv() {
  var weatherUrl =
    oneCallApi + lat + "&lon=" + long + "&units=imperial&appid=" + weatherApi;

  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      futureWeather = data;
      console.log(futureWeather);
      displayFutureWeather();
    });
}

//still needs weather icon
function displayCurrentWeather() {
  // get the actual weather from the api
  console.log(currentWeather);

  var iconRef = currentWeather.weather[0].icon;
  var iconUrl = "https://openweathermap.org/img/wn/" + iconRef + "@2x.png";
  var iconEl = document.getElementById("currentIcon");
  var iconSrc = currentWeather.weather[0].description;

  console.log(iconRef);

  currentCityName.innerHTML = `Forecast for: ${currentWeather.name} ${date}`;
  iconEl.setAttribute("src", iconUrl);
  iconEl.setAttribute("alt", iconSrc);
  currentTemp.innerHTML =
    "Temperature: " + currentWeather.main.temp + " Fahrenheit";
  currentWind.innerHTML = "Wind: " + currentWeather.wind.speed + " MPH";
  currentHum.innerHTML = "Humidity: " + currentWeather.main.humidity + "%";

  lat = currentWeather.coord.lat;
  long = currentWeather.coord.lon;
  console.log(lat);
  console.log(long);
  // populate current weather box
}

function displayFutureWeather() {
  //variables for data
  forecastDiv.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    console.log(futureWeather);
    var futureDate = moment(date, "MMM Do, YYY").add([i + 1], "days");
    var futureIcon = futureWeather.daily[i].weather[0].icon;
    var futureIconAlt = futureWeather.daily[i].weather[0].description;
    var iconUrl = "https://openweathermap.org/img/wn/" + futureIcon + "@2x.png";
    var futureTemp = futureWeather.daily[i].temp.day;
    var futureWind = futureWeather.daily[i].wind_speed;
    var futureHum = futureWeather.daily[i].humidity;
    // variables for html elements
    var card = document.createElement("div");

    //elements to hold the data
    var dateEl = document.createElement("h3");
    var imageEl = document.createElement("img");
    var tempEl = document.createElement("p");
    var windEl = document.createElement("p");
    var humEl = document.createElement("p");

    //inject data inside elements
    dateEl.innerText = futureDate;
    imageEl.setAttribute("src", iconUrl);
    imageEl.setAttribute("alt", futureIconAlt);
    tempEl.innerText = "Temp: " + futureTemp;
    windEl.innerText = "Wind: " + futureWind;
    humEl.innerText = "Hum: " + futureHum;

    //put all inside card div
    card.append(dateEl, imageEl, tempEl, windEl, humEl);
    // append the card to the forecast in dom
    forecastDiv.appendChild(card);
  }
}

//SAVE CITY INPUT AND ADD TO LIST NOT WORKING
function saveHist(city) {
  histArray = [];
  histArray.push(city);
  localStorage.setItem("savedCity", histArray);
  getHist();
}

function getHist() {
  // var savedHist = localStorage.getItem("savedCity");
  for (i = 0; i < histArray.length; i++) {
    var histButton = document.createElement("button");
    histButton.setAttribute("type", "button");
    histButton.setAttribute("data-city", histArray[i]);
    histButton.innerText = histArray[i];

    searchHist.appendChild(histButton);
  }
}

searchButton.addEventListener("click", function () {
  searchedCity = searchVal.value.trim();
  saveHist(searchedCity);
  //save the searched City to local memory
  getCurrentWeather();
});

searchHist.addEventListener("click", function (e) {
  console.log(e.target);
  var histCity = e.target.getAttribute("data-city");
  console.log(histCity);
  searchedCity = histCity;
  getCurrentWeather();
  getFutureAndUv();
});
getHist();
// TO DO:
// uv Index not opening
// add uv index to current(with colors)
// populate future weather
// get the picture icon from the data
// city saved to local memory, how to add to list
