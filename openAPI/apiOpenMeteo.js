// setting variables
// weather-form
const weatherForm = document.querySelector("#weather-form");
// city-input
const cityInput = document.querySelector("#city-input");
// location
const weatherLocation = document.querySelector("#weather-location");
// temperature
const temperature = document.querySelector("#temperature");

cityInput.addEventListener("input", function () {
    weatherLocation.textContent = cityInput.value
        ?`${cityInput.value}'s Weather`
        : "City's Weather";
});

// function geocoding user's city for get long and lat
async function geocoding(cityName) {
    // set url
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;

    const response = await fetch(geocodingUrl);
    const data = await response.json();

    return data.results ? data.results[0] : null;
}
    
// function getWeather
async function getWeather(latitude, longitude) {
    // set url
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`;

    const response = await fetch(weatherUrl);
    const data = await response.json();

    return data;
}

// add event listener to form
weatherForm.addEventListener("submit", async function(event){
    // preventDefault
    event.preventDefault();
    // get city name
    const cityName = cityInput.value.trim();

    // try 
    try {
        // get location
        const location = await geocoding(cityName);
        // get long and lat
        const weatherData = await getWeather(location.latitude, location.longitude);
        // update location name
        weatherLocation.textContent = location.name;
        // update temperature
        temperature.textContent = `${weatherData.current.temperature_2m}°F`;
    } catch (error) {
        // display error message
        weatherLocation.textContent = "";
        temperature.textContent = "No weather loaded"
        // console.error
        console.error("Error: ", error);
    }
});