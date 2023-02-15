/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

async function getCars() {
  const response = await fetch("cars.json");
  const data = await response.json();
  return data;
}

async function displayCars() {
  const cars = await getCars();
  const output = document.getElementById("output");

  cars.forEach((car) => {
    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `<p>Brand: ${car.brand}</p><p>Model: ${car.models}</p>`;
    output.appendChild(div);
  });
}
displayCars();
