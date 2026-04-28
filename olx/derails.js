function getUrl() {
  const getData = new URLSearchParams(window.location.search);
  const getId = getData.get("id");
  console.log(getId);
  showcard(getId);
}
getUrl();

async function showcard(getId) {
  const response = await fetch(`https://dummyjson.com/products/${getId}`);
  const { title, thumbnail, category, price, rating, description } =
    await response.json();
  // const product = await response.json()
  // console.log(product)

  let productContainer = document.getElementById("product-detail-container");

  productContainer.innerHTML = `
    <div class="main-card">
        
        <div class="image-section">
            <img src="${thumbnail}" id="main-img" alt="Product Image">
        </div>

        <div class="info-section">
            <span class="category-tag">${category}</span>
            <h1 class="product-title">${title}</h1>
            
            <div class="rating">
                <span>⭐⭐⭐⭐⭐</span>
                <span class="review-count">(${rating} Rating)</span>
            </div>

            <p class="product-price">$${price}</p>
            
            <p class="product-desc">
                ${description}
            </p>

            <div class="action-buttons">
                <button class="buy-now-btn">Buy Now</button>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>

            <div class="shipping-info">
                <span>🚚 Free Shipping over $50</span><br>
                <span>✅ 30 Days Replacement Guarantee</span>
            </div>
        </div>

    </div>
`;
}
