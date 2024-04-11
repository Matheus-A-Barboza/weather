document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "8bccd4e996a04d2488f221407241104"; // Substitua pelo sua chave de API
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", () => {
        const city = document.getElementById("city").value;
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
    });

    function displayWeather(data) {
        const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        const today = new Date();
        
        document.getElementById("location").textContent = data.location.name;
        document.getElementById("date").textContent = today.toLocaleDateString("pt-BR");
        document.getElementById("day").textContent = days[today.getDay()];
        document.getElementById("temperature").textContent = `Temperatura: ${data.current.temp_c}°C`;
        document.getElementById("temp-min-max").textContent = `Mín: ${data.forecast.forecastday[0].day.mintemp_c}°C / Máx: ${data.forecast.forecastday[0].day.maxtemp_c}°C`;
        document.getElementById("wind-speed").textContent = `Velocidade do Vento: ${data.current.wind_kph} km/h`;
        document.getElementById("condition").textContent = `Condição: ${data.current.condition.text}`;
        
        const icon = document.getElementById("weather-icon");
        icon.innerHTML = `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;
    }
});
