// Sample car data
const cars = [
  {
    id: "car1",
    name: "Infiniti QX60",
    image: "images/car1.jpg",
    price: 45000,
    mpg: 22,
    horsepower: 295
  },
  {
    id: "car2",
    name: "BMW X7",
    image: "images/car2.jpg",
    price: 86000,
    mpg: 22,
    horsepower: 375
  },
  {
    id: "car3",
    name: "Volkswagen Golf R",
    image: "images/car3.jpg",
    price: 43000,
    mpg: 23,
    horsepower: 315
  },
  {
    id: "car4",
    name: "Ford Mustang",
    image: "images/car4.jpg",
    price: 32000,
    mpg: 24,
    horsepower: 310
  },
  {
    id: "car5",
    name: "Chevrolet Camaro",
    image: "images/car5.jpg",
    price: 33000,
    mpg: 22,
    horsepower: 275
  },
  {
    id: "car6",
    name: "Tesla Model 3",
    image: "images/car6.jpg",
    price: 38000,
    mpg: 130,
    horsepower: 283
  },
  {
    id: "car7",
    name: "Ford Bronco",
    image: "images/car7.jpg",
    price: 35000,
    mpg: 19,
    horsepower: 330
  },
  {
    id: "car8",
    name: "Toyota RAV4",
    image: "images/car8.jpg",
    price: 28000,
    mpg: 30,
    horsepower: 203
  },
  {
    id: "car9",
    name: "Hyundai Tucson",
    image: "images/car9.jpg",
    price: 31000,
    mpg: 28,
    horsepower: 187
  }

];

// Populate car dropdowns
function populateSelects() {
  const select1 = document.getElementById("car1-select");
  const select2 = document.getElementById("car2-select");

  cars.forEach((car) => {
    const option1 = document.createElement("option");
    option1.value = car.id;
    option1.textContent = car.name;
    select1.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = car.id;
    option2.textContent = car.name;
    select2.appendChild(option2);
  });
}
function buildCarCard(car, priceWinner, mpgWinner, hpWinner) {
  return `
    <div class="car-card">
      <img src="${car.image}" alt="${car.name}" loading="lazy">
      <h3>${car.name}</h3>
      <div class="stats-wrapper">
        <div class="stat ${car.id === priceWinner ? "best" : ""}">
          <span>Price</span>
          <div class="bar-container">
            <div class="bar" style="width: ${Math.min(100, 30000 / car.price * 100)}%"></div>
            <span class="bar-value">$${car.price}</span>
          </div>
        </div>

        <div class="stat ${car.id === mpgWinner ? "best" : ""}">
          <span>MPG</span>
          <div class="bar-container">
            <div class="bar" style="width: ${car.mpg * 2.5}%"></div>
            <span class="bar-value">${car.mpg}</span>
          </div>
        </div>

        <div class="stat ${car.id === hpWinner ? "best" : ""}">
          <span>Horsepower</span>
          <div class="bar-container">
            <div class="bar" style="width: ${car.horsepower / 4}%"></div>
            <span class="bar-value">${car.horsepower}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function compareCars() {
  const car1Id = document.getElementById("car1-select").value;
  const car2Id = document.getElementById("car2-select").value;

  if (!car1Id || !car2Id || car1Id === car2Id) {
    alert("Please select two different cars to compare.");
    return;
  }

  const car1 = cars.find((c) => c.id === car1Id);
  const car2 = cars.find((c) => c.id === car2Id);
  const priceWinner = car1.price < car2.price ? car1.id : car2.id;
  const mpgWinner = car1.mpg > car2.mpg ? car1.id : car2.id;
  const hpWinner = car1.horsepower > car2.horsepower ? car1.id : car2.id;
  const comparisonSection = document.getElementById("comparison-section");
  comparisonSection.innerHTML = `
    ${buildCarCard(car1, priceWinner, mpgWinner, hpWinner)}
    ${buildCarCard(car2, priceWinner, mpgWinner, hpWinner)}
  `;
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}
function saveComparison() {
  const comparisonSection = document.getElementById("comparison-section");
  if (comparisonSection.innerHTML.trim() === "") {
    alert("No comparison to save.");
    return;
  }
  localStorage.setItem("savedComparison", comparisonSection.innerHTML);
  alert("Comparison saved!");
}
document.addEventListener("DOMContentLoaded", () => {
  populateSelects();

  document.getElementById("compareBtn").addEventListener("click", compareCars);
  document.getElementById("saveBtn").addEventListener("click", saveComparison);
});

const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  confirmation.textContent = "Message sent successfully! We will contact you soon.";

  form.reset(); 
});
