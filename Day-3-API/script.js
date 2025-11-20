const apikey = "37ebcf2c5e11da4bd457cce207fb6ea8";

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult')
const cityName = document.getElementById('cityName')
const temperature = document.getElementById('temperature')
const condition = document.getElementById('condition')
const humidity = document.getElementById('humidity')
const errorText = document.getElementById('error')

searchBtn.addEventListener('click', ()=>{
    const city = cityInput.value.trim()
    if(city == ""){
        showError("please enter city name")
        return;
    }
    getweather(city)
})


async function getweather(city) {
    
    try {
        
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;


        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("city not found...")
        }

        const data = await response.json()

        cityName.textContent = `${data.name}, ${data.sys.country}`
        temperature.textContent = `${Math.round(data.main.temp)} C`
        condition.textContent = `${data.weather[0].description}`
        humidity.textContent = `Humidity ${data.main.humidity}`

        weatherResult.classList.remove("hidden")
        errorText.classList.add("hidden")
    } catch (error) {

        showError(error.message)
        
    }
}

function showError(message){
    
    errorText.textContent =message;
    errorText.classList.remove("hidden")
    weatherResult.classList.add("hidden")
}
