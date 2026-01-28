const yearSpan = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");
yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: 1893,
    area: 382207,
    imageUrl: "images/temple1.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: 2019,
    area: 41010,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: 2017,
    area: 44175,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Fort Lauderdale Florida Temple",
    location: "Fort Lauderdale, Florida",
    dedicated: 2014,
    area: 30500,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: 1919,
    area: 42100,
    imageUrl: "images/temple5.jpg"
  },
  {
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: 1999,
    area: 45800,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "London England Temple",
    location: "London, England",
    dedicated: 1958,
    area: 42652,
    imageUrl: "images/temple7.jpg"
  },
  {
    templeName: "San Diego California Temple",
    location: "San Diego, California",
    dedicated: 1993,
    area: 72000,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Manila, Philippines",
    dedicated: 1984,
    area: 26683,
    imageUrl: "images/temple9.jpg"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah",
    dedicated: 1995,
    area: 104000,
    imageUrl: "images/temple10.jpg"
  },
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: 1978,
    area: 59246,
    imageUrl: "images/temple11.jpg"
  },
  {
    templeName: "Denver Colorado Temple",
    location: "Denver, Colorado",
    dedicated: 1986,
    area: 29117,
    imageUrl: "images/temple12.jpg"
  }
];

function renderTemples(filteredTemples) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  filteredTemples.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = `${temple.templeName} - ${temple.location} (${temple.dedicated})`;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

renderTemples(temples);
const navLinks = document.querySelectorAll("nav a");
const currentFilter = document.querySelector("#currentFilter");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;
    currentFilter.textContent = link.textContent;

    let filteredTemples = temples;

    switch(filter) {
      case "old":
        filteredTemples = temples.filter(t => t.dedicated < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(t => t.dedicated > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(t => t.area < 10000);
        break;
      case "home":
      default:
        filteredTemples = temples;
    }

    renderTemples(filteredTemples);
  });
});
