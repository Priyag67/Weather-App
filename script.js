const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "a08c6ca65b6ba133532f08651bae4910";

const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");


async function checkWeather(cityName){
 let response = await fetch(apiUrl + cityName +`&appid=${apiKey}`);
 let data = await response.json();
 
 if(!response.ok){
    document.querySelector(".errorMsg").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}
else{
 console.log(data);
 document.querySelector(".errorMsg").style.display = "none";

 if(data.weather[0].main == "Clear"){
    document.querySelector(".weatherimg").src = "images/clear.png";
 }else if(data.weather[0].main == "Clouds"){
    document.querySelector(".weatherimg").src = "images/clouds.png";
 }else if(data.weather[0].main == "Rain"){
    document.querySelector(".weatherimg").src = "images/rain.png";
 }else if(data.weather[0].main == "Drizzle"){
    document.querySelector(".weatherimg").src = "images/drizzle.png";
 }else if(data.weather[0].main == "Mist"){
    document.querySelector(".weatherimg").src = "images/mist.png";
 }else if(data.weather[0].main == "Snow"){
    document.querySelector(".weatherimg").src = "images/snow.png";
 }

 
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
 document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";

 document.querySelector(".weather").style.display = "block";
}
    
}


searchBtn.addEventListener("click", () => {
    let inputCity = searchBox.value;
    checkWeather(inputCity);
})