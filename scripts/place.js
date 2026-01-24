
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();
const lastModifiedSpan = document.querySelector("#lastModified");
lastModifiedSpan.textContent = document.lastModified;
function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

const temperature = parseFloat(document.querySelector("#temperature").textContent);
const windSpeed = parseFloat(document.querySelector("#windspeed").textContent);
const windChillSpan = document.querySelector("#windchill");

if (temperature <= 50 && windSpeed > 3) {
  windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
} else {
  windChillSpan.textContent = "N/A";
}
