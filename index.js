// your codelet allCars = [];

fetch('cars.json')
.then(res => res.json())
.then(data => {
  allCars = data;
  displayCars(allCars);
});

function displayCars(cars) {
  let output = "";

  cars.forEach(car => {
    output += `
      <div class="car-card">
        <img src="${car.image}">
        <h3>${car.name}</h3>
        <p>₹${car.price}</p>
        <p>${car.fuel}</p>
      </div>
    `;
  });

  document.getElementById("cars").innerHTML = output;
}

// FILTER FUNCTION
document.getElementById("search").addEventListener("input", filterCars);
document.getElementById("fuelFilter").addEventListener("change", filterCars);
document.getElementById("priceFilter").addEventListener("change", filterCars);

function filterCars() {
  let search = document.getElementById("search").value.toLowerCase();
  let fuel = document.getElementById("fuelFilter").value;
  let price = document.getElementById("priceFilter").value;

  let filtered = allCars.filter(car => {
    return (
      car.name.toLowerCase().includes(search) &&
      (fuel === "" || car.fuel === fuel) &&
      (price === "" || car.price <= price)
    );
  });

  displayCars(filtered);
} 
