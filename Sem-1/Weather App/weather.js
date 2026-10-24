// Selecting Elements from the HTML File
let button = document.querySelector(".button");
let city = document.querySelector(".inputt");
let cityname = document.querySelector(".city-name");
let temperature = document.querySelector(".temprature");
let date = document.querySelector(".date");
let day = document.querySelector(".day");
let icon = document.querySelector(".icon");
let iconImg = document.querySelector(".weather-icon");
let weatherText = document.querySelector(".weather-text");


// Adding Event Listener
button.addEventListener("click", async function (e) {
  e.preventDefault();

  const cityName = city.value.trim();
  if (!cityName) return;

  // Update city name immediately
  cityname.textContent = cityName;

  try {
    // Single API call
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=76a6599668684104b1d65113262301&q=${cityName}&aqi=no`,
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    // Update temperature
    temperature.textContent = `${data.current.temp_c}°C`;

    // Update icon (weather condition)
    iconImg.src = "https:" + data.current.condition.icon;
    weatherText.textContent = data.current.condition.text;

    // Format date and time from local time string
    const localTime = new Date(data.location.localtime);
    date.textContent = localTime.toLocaleDateString("en-GB").toUpperCase(); // e.g., 30 JAN 2026
    day.textContent = localTime.toLocaleDateString("en-US", {
      weekday: "long",
    }); // e.g., Friday
  } catch (error) {
    alert("City not found or error fetching weather data");
  }

  // Alert after updating UI
  alert(`Loading ${cityName}'s Weather Forecast`);
});
