let apikey = "b952f8237fccbd54be15492edae3a80e";
let apiUrl = "https://home.openweathermap.org/api_keys" ;
let city ;
let userCity = document.getElementById("userText") ;
let temperature = document.getElementById("temp") ;
let ct = document.getElementById("city") ;
let humidity = document.getElementById("humidity_info") ;
let windInfo = document.getElementById("wind_info") ;
let weatherImage = document.querySelector(".weather_img") ;

async function getWeatherData()
{
    if(userCity.value=="")
    {
        alert("ENTER A CITY NAME")
    }
    else{
        city = userCity.value ;
        let response  = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`) ;
        let data  = await response.json() ;
        ct.innerHTML = data.name ;
        temperature.innerHTML = Math.round(data.main.temp - 273.15)+ "°C" ;
        humidity.innerHTML = data.main.humidity + "%" ;
        windInfo.innerHTML = data.wind.speed + "km/h" ;
        userCity.value="";
        if(data.weather[0].main=="Clear"){
            weatherImage.src="sunny.gif";
        }else if(data.weather[0].main=="Snow"){
            weatherImage.src="snow.webp";
        }
        else if(data.weather[0].main=="Clouds"){
            weatherImage.src="clear.gif";
        }else if(data.weather[0].main=="Drizzle"){
            weatherImage.src="brizzle.gif";
        }else if(data.weather[0].main=="Mist"){
            weatherImage.src="mist.gif";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImage.src="rain.gif";
        }
        console.log(data)
    }
    
}




