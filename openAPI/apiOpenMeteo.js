// setting variables
// weather-form
const weatherForm = document.querySelector("#weather-form");
// city-input
const cityInput = document.querySelector("#city-input");
// location
const weatherLocation = document.querySelector("#weather-location");
// weather-label
const weatherLabel = document.querySelector("#weather-label");
// weather-value
const weatherValue = document.querySelector("#weather-value");
// weather-options
const weatherOptions = document.querySelector("#weather-options");
//show-temp 
const showTemperatureButton = document.querySelector("#show-temp");
//show-feelslike
const showFeelsLikeButton = document.querySelector("#show-feels-like");
// loading spinner
const weatherLoading = document.querySelector("#weather-loading");

let currentLocation = null;

cityInput.addEventListener("input", function () {
    const cityName = cityInput.value.trim();

    weatherLocation.textContent = cityInput.value
        ?`${cityInput.value}'s Weather`
        : "City's Weather";
});

// function geocoding user's city for get long and lat
async function geocoding(cityName) {
    // set url
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;

    const response = await fetch(geocodingUrl);
    if(!response.ok) {
        throw new Error("Loading geocoding failed");
    }
    const data = await response.json();

    return data.results ? data.results[0] : null;
}   
    
// function getWeather - get temperature first
async function getTemperature(latitude, longitude) {
    // set url - adding weather_code here for background effect 
    const temperatureUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code&temperature_unit=fahrenheit`;

    const response = await fetch(temperatureUrl);
    if(!response.ok) {
        throw new Error("Loading temperature failed")
    }
    const data = await response.json();

    return data;
}

// get feels like now
async function getFeelsLike(latitude, longitude){
    // updating get weather_code here as well
    const feelsLikeUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=apparent_temperature,weather_code&temperature_unit=fahrenheit`;

    const response = await fetch(feelsLikeUrl);

    if (!response.ok) {
        throw new Error("Loading feels like failed");
    }

    const data = await response.json();
    return data;
}

// Change background based on weather_code
function useWeatherBackground(weatherCode) {
    // remove previous weather background
    document.body.classList.remove(
        "weather-default",
        "weather-clear",
        "weather-cloudy",
        "weather-rain",
        "weather-snow"
    );

    if (weatherCode === 0) {
        document.body.classList.add("weather-clear");
    } else if ([1, 2, 3, 45, 48].includes(weatherCode)) {
        document.body.classList.add("weather-cloudy");
    } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(weatherCode)) {
        document.body.classList.add("weather-rain");
    } else if ([56, 57, 66, 67, 71, 73, 75, 77, 85, 86].includes(weatherCode)) {
        document.body.classList.add("weather-snow");
    } else {
        document.body.classList.add("weather-default");
    }
}

// add event listener to form
weatherForm.addEventListener("submit", async function(event){
    // preventDefault
    event.preventDefault();
    // get city name
    const cityName = cityInput.value.trim();

    // if no cityName
    if (!cityName) {
        weatherLocation.textContent = "City's Weather";
        weatherLabel.textContent = "Weather:";
        weatherValue.textContent = "Please enter a city";
        weatherOptions.hidden = true;
        weatherLoading.hidden = true;
        currentLocation = null;
        return;
    }

    // try 
    try {
        weatherOptions.hidden = true;
        weatherLoading.hidden = false;
        weatherValue.textContent = "Loading...";

        // get location
        const location = await geocoding(cityName);

        // error handling: if city doesn't exist
        if (!location) {
            weatherLocation.textContent = `${cityName}'s Weather`;
            weatherLabel.textContent = "Weather:";
            weatherValue.textContent = "City not found.";
            weatherOptions.hidden = true;
            weatherLoading.hidden = true;
            currentLocation = null;
            return;
        }

        currentLocation = location;
        weatherLocation.textContent = `${location.name}'s Weather`;
        weatherLabel.textContent = "City found:";
        weatherValue.textContent = "Choose See Temp or See Feels Like.";
        weatherOptions.hidden = false;
        weatherLoading.hidden = true;
    } catch (error){
        weatherLocation.textContent = cityName ? `${cityName}'s Weather` : "City's Weather";
        weatherLabel.textContent = "Weather:";
        weatherValue.textContent = "No weather loaded";
        weatherOptions.hidden = true;
        weatherLoading.hidden = true;
        currentLocation = null;
        console.error("Error:", error);
    }
});

// event listener for show temperature button
showTemperatureButton.addEventListener("click", async function () {
    if (!currentLocation) {
        weatherValue.textContent = "Search for a valid city first.";
        return;
    }
    
    try {
        const weatherData = await getTemperature(currentLocation.latitude, currentLocation.longitude);
        weatherLabel.textContent = "Temperature:";
        weatherValue.textContent = `${weatherData.current.temperature_2m}°F`;
        // change background according to weather_code
        useWeatherBackground(weatherData.current.weather_code);
    } catch (error) {
        weatherValue.textContent = "Could not load temperature";
        console.error("Error:", error);
    }
}) 

showFeelsLikeButton.addEventListener("click", async function () {
    if (!currentLocation) {
        weatherValue.textContent = "Search for a valid city first.";
        return;
    }

    try {
        const weatherData = await getFeelsLike(currentLocation.latitude, currentLocation.longitude);
        weatherLabel.textContent = "Feels Like:";
        weatherValue.textContent = `${weatherData.current.apparent_temperature}°F`;
        useWeatherBackground(weatherData.current.weather_code);
    } catch (error) {
        weatherValue.textContent = "Could not load feels like";
        console.error("Error:", error);
    }
});