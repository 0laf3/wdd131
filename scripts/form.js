const form = document.querySelector(".form");
const visits = document.querySelector(".visits");

/* creating a product list */
function createOptions() {
    const products = [
        {id: "fc-1888", name: "flux capacitor", averagerating: 4.5,},
        {id: "fc-2050", name: "power laces", averagerating: 4.7,},
        {id: "fs-1987", name: "time circuits", averagerating: 3.5,},
        {id: "ac-2000", name: "low voltage reactor", averagerating: 3.9,},
        {id: "jj-1969",name: "warp equalizer",averagerating: 5.0,},
    ];

    const selectElement = document.querySelector("#item");
    
    products.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        selectElement.appendChild(option);
    });
}

/* getting data from Storage*/
let visitCounter = parseInt(localStorage.getItem("reviews")) || 0;

/* listener to create or update a new page */
document.addEventListener("DOMContentLoaded", function () {
    const pathname = window.location.pathname;
  
    if (pathname.includes("form.html")) {
      createOptions();
    } else if (pathname.includes("review.html")) {
      visitCounter ++;
      visits.textContent = visitCounter;
      localStorage.setItem("reviews", visitCounter);
    }
  });
  
  
