function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(showPosition);
// ---------------------------------------------

function showTemp(position) {
  let apiKey = "8881769c949a322daeafcf35c09b1eb2";
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(url).then(function (response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);

    showTemperature(temperature);
  });
}
navigator.geolocation.getCurrentPosition(showTemp);
// ---------------------------------------------

function showTemperature(temp) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your corrent temperature is ${temp}`;
}
