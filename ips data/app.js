fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(console.log);

getProdcuts();
async function getProdcuts() {
  const response = await fetch("https://dummyjson.com/products");
  const Data = await response.json();
  let allProducts = Data.products;

  const productImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", // Watch
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", // Headphones
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500", // Camera
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500", // Shoes
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", // Red Shoes
    "https://images.unsplash.com/photo-1585333120167-0523acc4c1ad?w=500", // Mouse
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", // Keyboard
    "https://images.unsplash.com/photo-1546868871-70c122467d9b?w=500", // Watch White
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500", // Controller
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", // Sunglasses
    "https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?w=500", // Backpack
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", // Smartphone
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", // Laptop
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=500", // Chair
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500", // Shoes Blue
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500", // Speaker
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500", // Vans Shoes
    "https://images.unsplash.com/photo-1584000058946-9477e4396512?w=500", // Bottle
    "https://images.unsplash.com/photo-1544648397-72fc8f6d83c6?w=500", // Jacket
    "https://images.unsplash.com/photo-1581235720704-06d3acfc1c6f?w=500", // Toy Car
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500", // Ring
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500", // Shoes Neon
    "https://images.unsplash.com/photo-1520116467321-f14663f60e05?w=500", // Bicycle
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500", // Leather Watch
    "https://images.unsplash.com/photo-1511556532299-8f66aba02b59?w=500", // Sneaker
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", // Leather Bag
    "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=500", // Macbook
    "https://images.unsplash.com/photo-1533228891704-7f7ec549609b?w=500", // Perfume
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500", // Shoes Sports
    "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500", // Camera Retro
  ];
  let cardCon = document.getElementById("card-container");

  for (var i = 0; i < allProducts.length; i++) {
    var { title, description, price } = allProducts[i];

    cardCon.innerHTML += `
    <div class="card">
                <div class="badge">New</div>
                <img src="${productImages[i]}" alt="Product">
                <h4>${title}</h4>
                <p class="price">Rs. ${price}</p>
                <button class="add-btn">Add to Cart</button>
            </div>
    `;
  }
}
