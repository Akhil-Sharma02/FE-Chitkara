let btn = document.querySelector(".btn");
let input = document.querySelector("#cityName");
let body = document.querySelector("body");
let cityName = document.querySelector(".name");
let date = document.querySelector(".date");
let icon = document.querySelector(".icon");
let temp = document.querySelector(".temp");
let condition = document.querySelector(".condition");
let result = document.querySelector(".result");


btn.addEventListener("click",log);


function log(){
    let key = ''; //input the key
    let city = input.value;
    console.log(city);
    input.value="";
    let url = "https://api.weatherapi.com/v1/forecast.json?key=" + key + "&q=" + city + "&days=1&aqi=yes&alerts=no";
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            changeHtml(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
}

function changeHtml(data) {
    console.log("data is:");
    let conditionCode = data.current.condition.code;
    backImage(conditionCode);
    cityName.innerText = data.location.name.toUpperCase();
    date.innerText = data.forecast.forecastday[0].date;
    let iconSrc = data.current.condition.icon;
    icon.setAttribute('src',iconSrc);
    result.style.visibility = "visible";
    console.log(data.current.condition.icon);
    console.log(iconSrc);
    temp.innerText = data.current.temp_c + "°C / " + data.current.temp_f + "°F";
    condition.innerText = data.current.condition.text;
}

function backImage(code) {
    if(code == 1000) {
        body.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp4555534.jpg)';
    }
    else if(code == 1003 || code == 1006 || code == 1009) {
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)';
    }
    else if(code == 1030 ||  code == 1135 || code == 1147) {
        body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/464455.jpg)';
    }
    else if(code == 1063 || code == 1072 || (code >= 1150 && code <= 1201) || (code >= 1240 && code <= 1246) || code == 1273 || code == 1276) {
        body.style.backgroundImage = 'url(https://wallpaperbat.com/img/161691-rainy-desktop-wallpaper.jpg)';
    }
    else if(code == 1066 ||  code == 1069 || code == 1114 ||  code == 1117 || (code >= 1204 && code <= 1237) || (code >= 1249 && code <= 1264) || code == 1279 || code == 1282) {
        body.style.backgroundImage = 'url(https://i.pinimg.com/originals/0f/93/ec/0f93ec67785fa42d39f7bdd755294007.jpg)';
    }
    else if(code == 1087) {
        body.style.backgroundImage = 'url(https://www.wallpaperup.com/uploads/wallpapers/2015/11/17/838242/fdde97e66185f3e105879084dfc65e89-700.jpg)';
    }
}