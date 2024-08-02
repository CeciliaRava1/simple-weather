const apy_key = 'd3dba43318f4e3e05bd46922f31f7db1';
const url = 'https://api.openweathermap.org/data/2.5/weather';
const difKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('inputCity').value;
    if (city) {
        fetchWeatherData(city)
    }
});

function fetchWeatherData(city) {
    // ?q= (Query)
    fetch(`${url}?q=${city}&appid=${apy_key}`)
        .then(data => data.json())
        .then(data => showWeatherData(data));
}

function showWeatherData(data){
    const divWeatherData = document.getElementById('weatherData');
    divWeatherData.innerHTML = '';

    const nameCity = data.name;
    const nameCountryOfCity = data.sys.country;
    const temperatureCity = data.main.temp;
    const humidityCity = data.main.humidity;
    const descriptionCity = data.weather[0].description;
    const icon = data.weather[0].icon;

    const nameCityInfo = document.createElement('h2');
    nameCityInfo.textContent = `${nameCity}, ${nameCountryOfCity}`;

    const temperatureCityInfo = document.createElement('p');
    temperatureCityInfo.textContent = `The temperature is: ${Math.floor(temperatureCity-difKelvin)}°C`;

    const humidityCityInfo = document.createElement('p');
    humidityCityInfo.textContent = `The humidity is: ${humidityCity}%`;

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const descriptionCityInfo = document.createElement('p');
    descriptionCityInfo.textContent = `The meteorological description is: ${descriptionCity}`;

    divWeatherData.appendChild(nameCityInfo);
    divWeatherData.appendChild(temperatureCityInfo);
    divWeatherData.appendChild(humidityCityInfo);
    divWeatherData.appendChild(iconInfo);
    divWeatherData.appendChild(descriptionCityInfo);
}

