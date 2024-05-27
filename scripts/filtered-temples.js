// responsive navigation

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// temples list
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Marden, Australia",
        dedicated: "1999, June, 15",
        area: 10700,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg",
    },
    {
        templeName: "Mesa AZ",
        location: "Mesa, AZ, United States",
        dedicated: "1927, April, 23",
        area: 75000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
    },
    {
        templeName: "Freiberg Germany",
        location: "Freiberg, Germany",
        dedicated: "1985, June, 29",
        area: 21500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/freiberg-germany/400x250/freiberg-germany-temple-lds-664670-wallpaper.jpg"
    },
    {
        templeName: "Tucson AZ",
        location: "Tucson, AZ, United States",
        dedicated: "2017, August, 13",
        area: 38216,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-exterior-1929407-wallpaper.jpg"
    },
    {
        templeName: "Columbia River",
        location: "Columbia River, Washington",
        dedicated: "2001, November, 18",
        area: 16880,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/400x250/columbia-river-washington-temple-1143561-wallpaper.jpg"
  
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg"
    },
  ];

// makeCards function
const makeCards = (templeList) => {
    const container = document.querySelector("#temples");
    container.innerHTML = "";
    templeList.forEach((temple) => {
        container.innerHTML += `<div class="card">
            <h2>${temple.templeName}</h2>

            <p><b>Location:</b> ${temple.location}</p>
            <p><b>Dedicated:</b> ${temple.dedicated}</p>
            <p><b>Size:</b> ${temple.area}</p>

            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="500" height="200">
            </figure>
        </div>`;
    });
};
  
  // Buttons and EventListeners
  document.querySelector("#home").addEventListener('click', () => {
    document.querySelector("#category-title").textContent = "Home"
    makeCards(temples);
  })

  document.querySelector("#old").addEventListener('click', () => {
    document.querySelector("#category-title").textContent = "Old"
    const oldTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900);
    makeCards(oldTemples);
  })

  document.querySelector("#new").addEventListener('click', () => {
    document.querySelector("#category-title").textContent = "New"
    const newTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);
    makeCards(newTemples);
  })

  document.querySelector("#large").addEventListener('click', () => {
    document.querySelector("#category-title").textContent = "Large"
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    makeCards(largeTemples);
  })

  document.querySelector("#small").addEventListener('click', () => {
    document.querySelector("#category-title").textContent = "Small"
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    makeCards(smallTemples);
  })

  // initial run
  makeCards(temples);
  