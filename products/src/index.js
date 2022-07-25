import faker from "faker";

let products = '';
const productsList = document.getElementById('dev-products')

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div class="product">${name}</div>`;
}

productsList.innerHTML = products;