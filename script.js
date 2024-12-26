// const btn = document.getElementById("searchbtn"); // [Button nikal liya search ka...]
// const cityName = document.getElementById("city"); // [City ka input field pakda...]
// const Api_key = `accdeec57d126eeae677a8c5ca89cbec`; // [Yeh API key hai apne weather data ke liye...]

// // [Chal ab weather data fetch karte hain city ke liye...]
// async function fetchData(city) {
//   try {
//     cityName.value = ""; // [City input field ko saaf kar diya...]
//     let res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}` // [API hit kar rhe hain city aur API key ke sath...]
//     );
//     let result = await res.json(); // [API ka data JSON me convert kar rhe hain...]
//     if (result.message) { // [Error message check kar rhe hain...]
//       document.getElementById("seconddiv").innerHTML = `<h1>${city} ${result.message}</h1>`; // [Error ka message show kar diya div me...]
//     }
//     displayWeather(result); // [Weather data display karne wali function ko bula rhe hain...]
//   } catch (err) {
//     // [Agar kuch gadbad hoti hai toh handle karenge yahan...]
//   }
// }

// // [Button ke click pe kaam suru...]
// btn.addEventListener("click", () => {
//   if (!cityName.value.trim()) { // [Check kar rhe hain input khali hai ya nahi...]
//     alert("Are malik, pehle koi city ka naam to likiye!"); // [Alert dikhaya user ko...]
//     return; // [Agar khali hai toh function wahi ruk jaaye...]
//   }
//   fetchData(cityName.value); // [Jo city likhi hai, uska data fetch karna...]
// });

// // [Yeh function hai weather data ko display karne ka...]
// function displayWeather({ name, main, wind, weather }) {
//   const tempInCelsius = Math.round(main.temp - 273.15); // [Temperature ko Celsius me convert karke round kar rhe hain...]
//   const weatherCondition = weather[0].description; // [Weather ka description nikal liya...]
//   const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; // [Weather icon ka link banaya...]
  
//   // [HTML content banaya jo weather info dikhayega...]
//   div = `<div id="weatherinfo">
//           <p id="temp">${tempInCelsius}°C</p> <!-- [Temperature yahan dikh raha hai...] -->
//           <p id="city">${name}</p> <!-- [City ka naam yahan hai...] -->
//           <p id="condition">${weatherCondition}</p> <!-- [Weather ka halat yahan hai...] -->
//           <img src="${weatherIcon}" alt="Weather Icon" id="weather-icon" /> <!-- [Weather icon lagaya...] -->

//           <div id="otherInfo">
//             <div id="wind">
//               <p>wind</p> <!-- [Hawa ki speed...] -->
//               <p>${wind.speed}m/s</p> <!-- [Speed ka value...] -->
//             </div>
//             <div id="wind">
//               <p>pressure</p> <!-- [Pressure ka info...] -->
//               <p>${main.pressure}ma</p> <!-- [Pressure ka value...] -->
//             </div>
//             <div id="wind">
//               <p>Humidity</p> <!-- [Humidity ka info...] -->
//               <p>${main.humidity}%</p> <!-- [Humidity ka value...] -->
//             </div>
//           </div>
//         </div>`;
//   document.getElementById("seconddiv").innerHTML = div; // [Second div me data daal diya...]
// }

// // [Current location ka button click hone par...]
// document.getElementById("crntloc").addEventListener("click", () => {
//   navigator.geolocation.getCurrentPosition(async (position) => {
//     let lati = position.coords.latitude; // [Latitude nikal rhe hain...]
//     let longi = position.coords.longitude; // [Longitude nikal rhe hain...]

//     try {
//       let res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${Api_key}` // [API ko current location ke sath hit kar rhe hain...]
//       );
//       let result = await res.json(); // [JSON me convert kar rhe hain...]
//       displayWeather(result); // [Weather ka data show kar diya...]
//     } catch (err) {
//       console.error("Error fetching weather data for current location:", err); // [Error aayi toh dikha denge console me...]
//     }
//   }, (error) => {
//     console.error("Error getting location:", error); // [Location lene me gadbad hui toh yeh message...]
//     document.getElementById("seconddiv").innerHTML = `<h1>Unable to fetch location. Please enable location services.</h1>`; // [Location error ka message dikhaya...]
//   });
// });



const btn = document.getElementById("searchbtn"); // [Button nikal liya search ka...]
const cityName = document.getElementById("city"); // [City ka input field pakda...]
const Api_key = `accdeec57d126eeae677a8c5ca89cbec`; // [Yeh API key hai apne weather data ke liye...]

// [Chal ab weather data fetch karte hain city ke liye...]
async function fetchData(city) {
  try {
    cityName.value = ""; // [City input field ko saaf kar diya...]
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}` // [API hit kar rhe hain city aur API key ke sath...]
    );
    let result = await res.json(); // [API ka data JSON me convert kar rhe hain...]

    // [Check karenge agar result me error message hai...]
    if (result.cod === "404") { // [City nahi mili toh cod '404' aata hai...]
      alert("Sb pta chl rha h, Aapne jo city search kiya h us naam se releted kio city h hi nhi"); // [Alert show kar diya...]
      return; // [Agar error hai toh function yahin ruk jaaye...]
    }

    displayWeather(result); // [Weather data display karne wali function ko bula rhe hain...]
  } catch (err) {
    console.error("Error fetching data:", err); // [Error agar aati hai toh console me dikha denge...]
  }
}

// [Button ke click pe kaam suru...]
btn.addEventListener("click", () => {
  if (!cityName.value.trim()) { // [Check kar rhe hain input khali hai ya nahi...]
    alert("Sb Pta chl rha h , Aapne koi city ka naam nhi dala h n..?"); // [Alert dikhaya user ko...]
    return; // [Agar khali hai toh function wahi ruk jaaye...]
  }
  fetchData(cityName.value); // [Jo city likhi hai, uska data fetch karna...]
});

// [Yeh function hai weather data ko display karne ka...]
function displayWeather({ name, main, wind, weather }) {
  const tempInCelsius = Math.round(main.temp - 273.15); // [Temperature ko Celsius me convert karke round kar rhe hain...]
  const weatherCondition = weather[0].description; // [Weather ka description nikal liya...]
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; // [Weather icon ka link banaya...]
  
  // [HTML content banaya jo weather info dikhayega...]
  div = `<div id="weatherinfo">
          <p id="temp">${tempInCelsius}°C</p> <!-- [Temperature yahan dikh raha hai...] -->
          <p id="city">${name}</p> <!-- [City ka naam yahan hai...] -->
          <p id="condition">${weatherCondition}</p> <!-- [Weather ka halat yahan hai...] -->
          <img src="${weatherIcon}" alt="Weather Icon" id="weather-icon" /> <!-- [Weather icon lagaya...] -->

          <div id="otherInfo">
            <div id="wind">
              <p>wind</p> <!-- [Hawa ki speed...] -->
              <p>${wind.speed}m/s</p> <!-- [Speed ka value...] -->
            </div>
            <div id="wind">
              <p>pressure</p> <!-- [Pressure ka info...] -->
              <p>${main.pressure}ma</p> <!-- [Pressure ka value...] -->
            </div>
            <div id="wind">
              <p>Humidity</p> <!-- [Humidity ka info...] -->
              <p>${main.humidity}%</p> <!-- [Humidity ka value...] -->
            </div>
          </div>
        </div>`;
  document.getElementById("seconddiv").innerHTML = div; // [Second div me data daal diya...]
}

// [Current location ka button click hone par...]
document.getElementById("crntloc").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    let lati = position.coords.latitude; // [Latitude nikal rhe hain...]
    let longi = position.coords.longitude; // [Longitude nikal rhe hain...]

    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${Api_key}` // [API ko current location ke sath hit kar rhe hain...]
      );
      let result = await res.json(); // [JSON me convert kar rhe hain...]
      displayWeather(result); // [Weather ka data show kar diya...]
    } catch (err) {
      console.error("Error fetching weather data for current location:", err); // [Error aayi toh dikha denge console me...]
    }
  }, (error) => {
    console.error("Error getting location:", error); // [Location lene me gadbad hui toh yeh message...]
    document.getElementById("seconddiv").innerHTML = `<h1>Unable to fetch location. Please enable location services.</h1>`; // [Location error ka message dikhaya...]
  });
});



