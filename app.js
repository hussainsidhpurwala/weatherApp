let url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "b8eab07690dccfef8f8976772220ac01";

let searchBox = document.querySelector(".search input"); 
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(cityName){
    let response = await fetch(url + cityName + `&appid=${apiKey}`);


    let data = await response.json();
    console.log(data);

    let citi = document.querySelector(".city");
    citi.innerText = data.name;

    let tmp = document.querySelector(".temp");
    tmp.innerText = Math.round(data.main.temp)+"°C";
    // console.log(tmp);
    let hum = document.querySelector(".humidity");
    hum.innerHTML = data.main.humidity+("%");
    let wnd = document.querySelector(".wind");
    wnd.innerText = data.wind.speed + ("Km/h");

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/images/mist.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "/images/snow.png";
    }else{
        weatherIcon.src = "/images/clouds.png";
    }

    let climate = document.querySelector(".weather");
    climate.style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
