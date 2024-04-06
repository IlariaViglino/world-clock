//let londonElement=document.querySelector("#london");
//let sydneyElement=document.querySelector("#sydney");




//let londonTime=londonElement.querySelector(".time");
//function displayCityTime(city){
  //  let cityTime=city.querySelector(".time");
    //cityTime.innerHTML=moment().tz(cityTimeZone(city)).format("H:mm:ss [<small>]A[</small>]");
//}


//function cityTime(city){
  //  let cityDate=city.querySelector(".date");
    //let currentCityDate=moment().format("MMMM Do, YYYY");
    // cityDate.innerHTML=currentCityDate;
     //let cityTime=city.querySelector(".time");
//setInterval(displayCityTime,1000,city);
//}
//cityTime(londonElement);
//cityTime(sydneyElement);




function updateCity(event){
    if(event.target.value.length>0){
        let cityTimeZone=event.target.value;
        let cityName=cityTimeZone.replace("_"," ").split("/")[1];
        let cityTime=moment().tz(cityTimeZone);
        let citiesElement=document.querySelector("#cities");
        citiesElement.innerHTML=`<div class="city">
        <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("H:mm:ss [<small>]A[</small>]")}</div>
    </div>
    `
    }
}


let citiesSelect=document.querySelector("#select-cities");
citiesSelect.addEventListener("change",updateCity);