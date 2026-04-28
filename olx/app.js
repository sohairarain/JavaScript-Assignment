let allproducts = [];
let count = 0;
let limit = 10;
getApi();

async function getApi() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  allproducts = products;
  console.log(products);
  rendarcard();
}

function rendarcard() {
  let container = document.getElementById("card-container");

  const nextBacth = allproducts.slice(count, count + limit);

  nextBacth.forEach((product) => {
    const { thumbnail, title, price, id } = product;

    container.innerHTML += `
        
            <div onclick='singleProduct(${id})' class="product-card">
                <div class="product-img">
                    <img src="${thumbnail}" alt="Watch">
                    <span class="badge">New</span>
                </div>
                <div class="product-info">
                    <h3>${title}</h3>
                    <p class="price">$${price}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
    
        `;
  });

  count += limit;

  if (count >= allproducts.length) {
    document.getElementById("see-more-btn").style.display = "none";
    // return;
  }
}

function singleProduct(id) {
  window.location.href = `singleProduct.html?id=${id}`;
}
