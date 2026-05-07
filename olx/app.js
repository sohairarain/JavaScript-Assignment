let allproducts = [];
let count = 0;
let limit = 10;
getApi();

async function getApi() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  allproducts = products;
  // console.log(allproducts);
  rendarcard();
  priceTocard()
}
function priceTocard(onClickData){

  
  let setPriceArray =[]
  for(let i = 0 ; i < allproducts.length ; i++){

    let priceGet = allproducts[i].price
     setPriceArray.push(priceGet)}
  let finalPrice = setPriceArray.sort()   

  switch(true){
    

    case ( onClickData):
      console.log(runing)
      break;

  }


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

// open popUp for click button logic

function openNow() {
  const popUp = document.getElementById("myPopup");
  popUp.style.display = "flex";
}
function closeNow() {
  const popUp = document.getElementById("myPopup");
  popUp.style.display = "none";
}

let userData = JSON.parse(localStorage.getItem("userinformation")) || [];

function login() {
  class obj {
    constructor(Email, pass) {
      this.Email = Email;
      this.pass = pass;
    }
  }

  const userEmail = document.getElementById("userEmail");
  const userPass = document.getElementById("userPassword");

  const userObj = new obj(userEmail.value, userPass.value);

  if(userEmail.value , userPass.value){

  userData.push(userObj);
  
  localStorage.setItem("userinformation", JSON.stringify(userData));

  const validuser = userData.find(
    (i) => i.Email == userEmail.value && i.pass == userPass.value,
  );
  console.log(validuser);
  
  userEmail.value = "";
  userPass.value = "";
  
closeNow()

  if(validuser){
   const successPopup = document.getElementById("loginSuccessPopup");
    successPopup.style.display = "flex"; 
    setTimeout(()=> {    successPopup.style.display = "none"; 
},2000)
  }
}else{
  alert(
    'invalid user'
  )
}
}

