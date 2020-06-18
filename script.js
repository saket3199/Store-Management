const petsData = [
  {
    email_id: "payare35@gmail.com",
    favFoods: [{ "Name": 'Shoes', "Quantity": 5, "Amount": "500Rs" }, { "Name": 'Books', "Quantity": 6, "Amount": "250Rs" }, { "Name": 'Bags', "Quantity": 7, "Amount": "2500Rs" }],
    totalAmount: "3250Rs",
    // photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    email_id: "manishchaudharyjee@gmail.com",
    favFoods: [{ "Name": 'Shirt', "Quantity": 4, "Amount": "1000Rs" }, { "Name": 'Shoes', "Quantity": 1, "Amount": "500Rs" }, { "Name": 'Tab', "Quantity": 2, "Amount": "5000Rs" }],
    totalAmount: "6500Rs"
    // photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    email_id: "mishivam1999@gmail.com",
    favFoods: [{ "Name": 'Shoes', "Quantity": 5, "Amount": "500Rs" }, { "Name": 'Belt', "Quantity": 2, "Amount": "1300Rs" }, { "Name": 'Trousers', "Quantity": 2, "Amount": "3000Rs" }],
    totalAmount: "4800Rs"
    // photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

// function age(birthYear) {
//   let calculatedAge = new Date().getFullYear() - birthYear;
//   if (calculatedAge == 1) {
//     return "1 year old";
//   } else if (calculatedAge == 0) {
//     return "Baby";
//   } else {
//     return `${calculatedAge} years old`;
//   }
// }

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food.Name} - ${food.Quantity} - ${food.Amount}</li>`).join("")}
  </ul>
  `;
}

function petTemplate(pet) {
  return `
      <div class="animal">
    
      <h2 class="pet-name">${pet.email_id}</h2>
      
      ${pet.favFoods ? foods(pet.favFoods) : ""}
      <p><strong>Total Amount:</strong> ${pet.totalAmount}</p>
      </div>
    `;
}

document.getElementById("app").innerHTML = `
    <h1 class="app-title">Today (${petsData.length} Customers Shopped From Your STORE)</h1>
    ${petsData.map(petTemplate).join("")}
    <p class="footer">These ${petsData.length} customers were added recently. Check back soon for updates.</p>
  `;
