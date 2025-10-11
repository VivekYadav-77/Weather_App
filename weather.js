const day = new Date()
const daysarr = ["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]
const d= day.getDay()
const form = document.getElementById('form')
const locationdiv = document.getElementById('fullweatherdatadiv')
form.addEventListener('submit',formfunction);
function formfunction(e){
  e.preventDefault()
  const userinput = document.getElementById('userinput').value
  weather(userinput)
  form.reset()
}
function weather(userinput){
  let url = `http://api.weatherapi.com/v1/current.json?{enter your api key}`;
  fetch(url)
    .then(response=>{
      if(!response.ok){
        alert(`${userinput}:is not a valid location name`)
         throw new Error(`https status:${response.status} ,${userinput}: not a valid location name `)
      }
      return response.json();
    }).then(res=>{
      //inserting name of location
        locationdiv.childNodes[1].childNodes[1].childNodes[1].innerText = res.location.name;
      //inserting name of region
        locationdiv.childNodes[1].childNodes[1].childNodes[3].innerText = res.location.region;
      //insertin name of country
        locationdiv.childNodes[1].childNodes[1].childNodes[5].innerText = res.location.country;
      // inserting present day
        locationdiv.childNodes[1].childNodes[1].childNodes[1].innerText = res.location.name;
      //inserting present day
        locationdiv.childNodes[1].childNodes[3].innerText=daysarr[d-1]
      //inserting date and time
        //getting date time string from api
        const dt = res.location.localtime
        //spliting that string into a arry
        const dtarr = dt.split(" ")
        console.log(dtarr)
        //inserting time 
        locationdiv.childNodes[1].childNodes[5].childNodes[1].innerText=dtarr[1]
        //inserting date
        locationdiv.childNodes[1].childNodes[5].childNodes[3].innerText=dtarr[0]
      //inserting temperature
        //inserting image
        locationdiv.childNodes[3].childNodes[1].innerHTML=`<img src = "${res.current.condition.icon}">`
        //inserting temperature in celcius
        locationdiv.childNodes[3].childNodes[3].childNodes[1].innerText=`${res.current.temp_c} C`
        //inserting temperature in fahernhite
        locationdiv.childNodes[3].childNodes[3].childNodes[3].innerText=`${res.current.temp_f} F`
      //inserting weather condition
        //inserting the condition of weather sunny haze night etc
        locationdiv.childNodes[3].childNodes[5].childNodes[1].innerText=res.current.condition.text
        //inserting feelslike in celcius
        locationdiv.childNodes[3].childNodes[5].childNodes[5].innerText=`${res.current.feelslike_c} C`
        //inserting feelslike in fahernhite 
        locationdiv.childNodes[3].childNodes[5].childNodes[7].innerText=`${res.current.feelslike_f}F`
      //inserting wind infromation
        //inserting wind speed in mph
        locationdiv.childNodes[5].childNodes[3].childNodes[1].innerText=`${res.current.wind_mph}MPH`
        //inserting wind speed in kph
        locationdiv.childNodes[5].childNodes[3].childNodes[3].innerText=`${res.current.wind_kph}KPH`
        //inserting wind degree
        locationdiv.childNodes[5].childNodes[3].childNodes[5].innerText=`${res.current.wind_degree}Degree`
        //inserting wnd direction
        locationdiv.childNodes[5].childNodes[3].childNodes[7].innerText=`${res.current.wind_dir}`
      //inserting presure
        locationdiv.childNodes[5].childNodes[5].childNodes[1].innerText=`${res.current.pressure_mb}MB`
        locationdiv.childNodes[5].childNodes[5].childNodes[3].innerText=`${res.current.pressure_in}IN`
      //inserting humidity
        locationdiv.childNodes[7].childNodes[1].childNodes[3].innerText=`Humidity ${res.current.humidity}`
      //inserting precipitation
        locationdiv.childNodes[7].childNodes[3].childNodes[3].childNodes[1].innerText=`${res.currentprecip_mm}MM`
        locationdiv.childNodes[7].childNodes[3].childNodes[3].childNodes[1].innerText=`${res.current.precip_in} IN`
      //inserting heatdata
        //inserting uv index
        locationdiv.childNodes[9].childNodes[1].childNodes[3].childNodes[1].innerText=`UV index ${res.current.uv}`
        //inserting heat temperature
        locationdiv.childNodes[9].childNodes[1].childNodes[3].childNodes[3].innerText=`${res.current.heatindex_c}C ${res.current.heatindex_f}F`
        //inserting dewpoint data
        locationdiv.childNodes[9].childNodes[3].childNodes[3].childNodes[1].innerText=`${res.current.dewpoint_c}C`
        locationdiv.childNodes[9].childNodes[3].childNodes[3].childNodes[3].innerText=`${res.current.dewpoint_f}F`
      //visibility
        locationdiv.childNodes[9].childNodes[5].childNodes[1].childNodes[3].innerText=`${res.current.vis_km}KM ${res.current.vis_miles}MILES`
      //cloud
        locationdiv.childNodes[9].childNodes[5].childNodes[3].childNodes[3].innerText=`${res.current.cloud}%`
      const weatherDiv = document.getElementById("fullweatherdatadiv");
      weatherDiv.classList.add("show");

    }).catch(err=>console.log(err));
console.log("hello this is the new one ")
}
