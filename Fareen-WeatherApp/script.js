document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    getWeatherBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();
        if (!city) return;
        fetchWeatherData(city);
    });

    async function fetchWeatherData(city) {
        const API_KEY = "1e595b55b1e76324e6477f0820e4a5e2";  // Replace with your actual API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                displayWeatherData(data);
            } else {
                showError("City not found. Please try again.");
            }
        } catch (error) {
            showError("Something went wrong. Check your connection.");
        }
    }

    function displayWeatherData(data) {
        cityNameDisplay.textContent = data.name;
        temperatureDisplay.textContent = `Temperature: ${data.main.temp}°C`;
        descriptionDisplay.textContent = `Weather: ${data.weather[0].description}`;

        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove("hidden");
        weatherInfo.classList.add("hidden");
    }
});
