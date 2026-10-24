// Selecting Elements from the HTML File
let button = document.querySelector(".button");
let city = document.querySelector(".inputt");
let cityname = document.querySelector(".city-name");
let temperature = document.querySelector(".temperature");
let date = document.querySelector(".date");
let day = document.querySelector(".day");
let time = document.querySelector(".time");
let state = document.querySelector(".state");
let country = document.querySelector(".country");
let iconImg = document.querySelector(".weather-icon");
let weatherCondition = document.querySelector(".weather-condition");
let feelsLikeValue = document.querySelector(".info-item:nth-child(1) .info-value");
let humidityValue = document.querySelector(".info-item:nth-child(2) .info-value");
let windValue = document.querySelector(".info-item:nth-child(3) .info-value");
let pressureValue = document.querySelector(".info-item:nth-child(4) .info-value");

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
    weatherCondition.textContent = data.current.condition.text;

    // Update location details
    state.textContent = data.location.region || "N/A";
    country.textContent = data.location.country;

    // Update additional info
    feelsLikeValue.textContent = `${data.current.feelslike_c}°C`;
    humidityValue.textContent = `${data.current.humidity}%`;
    windValue.textContent = `${data.current.wind_kph} km/h`;
    pressureValue.textContent = `${data.current.pressure_mb} hPa`;

    // Format date and time from local time string
    const localTime = new Date(data.location.localtime);
    
    // Update time
    let hours = localTime.getHours();
    let minutes = localTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    time.textContent = `${hours}:${minutes} ${ampm}`;
    
    // Update date
    date.textContent = localTime.toLocaleDateString("en-GB").replace(/\//g, " ").toUpperCase();
    
    // Update day
    day.textContent = localTime.toLocaleDateString("en-US", {
      weekday: "long",
    });

  } catch (error) {
    alert("City not found or error fetching weather data");
  }

  // Clear input after search
  city.value = "";
});