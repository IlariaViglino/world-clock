let londonElement=document.querySelector("#london");
let sydneyElement=document.querySelector("#sydney");

function cityTimeZone(city){
    if(city===london){
        return "Europe/London";
    }
    if(city===sydney){
        return "Australia/Sydney";
    }
}


let londonTime=londonElement.querySelector(".time");
function displayCityTime(city){
    let cityTime=city.querySelector(".time");
    cityTime.innerHTML=moment().tz(cityTimeZone(city)).format("H:mm:ss [<small>]A[</small>]");
}


function cityTime(city){
    let cityDate=city.querySelector(".date");
    let currentCityDate=moment().format("MMMM Do, YYYY");
     cityDate.innerHTML=currentCityDate;
     let cityTime=city.querySelector(".time");
setInterval(displayCityTime,1000,city);
}
cityTime(londonElement);
cityTime(sydneyElement);