
//^ function to check log-in 
let before_login=document.querySelector("#before_login")
let log_out=document.querySelector(".log_out")
let userName_enter=document.querySelector("#userName_enter")
function checkUser (){
  let user_local = localStorage.getItem('userName') 

  if (user_local) {

    before_login.style.display="none"
    userName_enter.style.display="block"
    log_out.style.display="block"
  
    userName_enter.innerHTML=user_local
    console.log( userName_enter.innerHTML)
  }}
checkUser ()
function logout() {
  localStorage.removeItem('userName');
  before_login.style.display="blocke"
  userName_enter.style.display="none"
  log_out.style.display="none"
}

//* auto writing title
let title        = document.querySelector(".title");
let mytitle = "E-Commerce Website ";
let index = 1;
setInterval(
  function () {
    title.textContent =  mytitle.slice(0, index);
    index++;
    if (index == mytitle.length) {
    // clearInterval(yy) 
      index = 1;
    }
  }, 200);

  
//* product data entery  Array which is thecore of our website
let products_js = [

  {
    id: "1",
    imgUrl: "./products/w1.jpeg",
    name_product: "STRIPED SHIRT DRESS ",
    price: "1.299 EGP",
    category: "women product "
  },

  {
    id: "2",
    imgUrl: "./products/w2.jpeg",
    name_product: "Buffy Sleeves Brown Dress",
    price: "1.100 EGP",
    category: "women product "
  },

  {
    id: "3",
    imgUrl: "./products/w3.jpeg",
    name_product: "Mint Silk Blouse",
    price: "750 EGP",
    category: "women product "
  },
  {
    id: "4",
    imgUrl: "./products/w4.jpeg",
    name_product: "Buffy Sleeves Cotton Blouse",
    price: "750 EGP",
    category: "women product "
  },


  {
    id: "5",
    imgUrl: "./products/w5.jpeg",
    name_product: "Maxi wrap dress",
    price: " 999 EGP",
    category: "women product "
  },

  {
    id: "6",
    imgUrl: "./products/w6.jpeg",
    name_product: "Floral print shirt dress with long sleeves ",
    price: " 750 EGP",
    category: "women product "
  },


  {
    id: "7",
    imgUrl: "./products/w7.jpeg",
    name_product: "Textured Round Neck Top with Short Sleeves ",
    price: "350 EGP",
    category: "women product "
  },

  {
    id: "8",
    imgUrl: "./products/w8.jpeg",
    name_product: "Striped Suit with Short Sleeves ",
    price: "850 EGP",
    category: "women product "
  },


  {
    id: "9",
    imgUrl: "./products/w9.jpeg",
    name_product: "White Cotton Shirt ",
    price: "450 EGP",
    category: "women product "
  },
  {
    id: "10",
    imgUrl: "./products/w10.jpeg",
    name_product: "Short Green Skirt ",
    price: "650 EGP",
    category: "women product "
  },

  {
    id: "11",
    imgUrl: "./products/w11.jpeg",
    name_product: "Sleeve Broderie-Anglaise Cotton Shirtdress ",
    price: "1.199 EGP",
    category: "women product "
  },
  {
    id: "12",
    imgUrl: "./products/w12.jpeg",
    name_product: "Belted midi dress ",
    price: "799 EGP",
    category: "women product "
  },



  {
    id: "13",
    imgUrl: "./products/men1.jpeg",
    name_product: "Slim-fit chambray cotton shirt ",
    price: "1.100 EGP",
    category: "men product "
  },

  {
    id: "14",
    imgUrl: "./products/men2.jpeg",
    name_product: "PRINTED RIPPED T-SHIRT ",
    price: "1,100 EGP",
    category: "men product "
  },



  {
    id: "15",
    imgUrl: "./products/men4.jpeg",
    name_product: "Regular White shirt ",
    price: "699 EGP",
    category: "men product "
  },


  {
    id: "16",
    imgUrl: "./products/men5.jpeg",
    name_product: "Regular Fit Oxford shirt ",
    price: "799 EGP",
    category: "men product "
  },

  {
    id: "17",
    imgUrl: "./products/men6.jpeg",
    name_product: "Regular Fit Linen-blend shirt",
    price: "1.299 EGP",
    category: "men product "
  },

  {
    id: "18",
    imgUrl: "./products/men7.jpeg",
    name_product: "Slim-fit COTTON T-Shirt ",
    price: "799 EGP",
    category: "men product "
  },

  {
    id: "19",
    imgUrl: "./products/men8.jpeg",
    name_product: "STAND-UP COLLAR SHIRT ",
    price: "1.899 EGP",
    category: "men product "
  },

  {
    id: "20",
    imgUrl: "./products/men9.jpeg",
    name_product: "Regular Fit Resort shirt ",
    price: "1.399 EGP",
    category: "men product "
  },

  {
    id: "21",
    imgUrl: "./products/men10.jpeg",
    name_product: "COTTON HOODIE T-SHIRT ",
    price: "799 EGP",
    category: "men product "
  },

  {
    id: "22",
    imgUrl: "./products/men11.jpeg",
    name_product: "Oversized Fit T- shirt ",
    price: "499 EGP",
    category: "men product "
  },
  {
    id: "23",
    imgUrl: "./products/men12.jpeg",
    name_product: "Regular Fit Linen-blend shirt ",
    price: "1.199 EGP",
    category: "men product "
  },


  {
    id: "24",
    imgUrl: "./products/kid1.jpeg",
    name_product: "HEART DENIM DUNGAREES ",
    price: "1.100 EGP",
    category: "kids product "
  },

  {
    id: "25",
    imgUrl: "./products/kid2.jpeg",
    name_product: "Oversize T-Shirt ",
    price: "450 EGP",
    category: "kids product "
  },

  {
    id: "26",
    imgUrl: "./products/kid3.jpeg",
    name_product: "2-pice flory suit  ",
    price: "750 EGP",
    category: "kids product "
  },

  {
    id: "27",
    imgUrl: "./products/kid4.jpeg",
    name_product: "2-pice suit ",
    price: "750 EGP",
    category: "kids product "
  },

  {
    id: "28",
    imgUrl: "./products/kid5.jpeg",
    name_product: "COMFORT BAGGY SHORT JEANS ",
    price: "650 EGP",
    category: "kids product "
  },

  {
    id: "29",
    imgUrl: "./products/kid6.jpeg",
    name_product: "Dun-till Short Skirt",
    price: "450 EGP",
    category: "kids product "
  },

  {
    id: "30",
    imgUrl: "./products/kid7.jpeg",
    name_product: "Bow Front Puff Sleeve Dress ",
    price: "750 EGP",
    category: "kids product "
  },

  {
    id: "31",
    imgUrl: "./products/kid8.jpeg",
    name_product: "Ruffle Trim Babydoll Dress ",
    price: "850 EGP",
    category: "kids product "
  },
  {
    id: "32",
    imgUrl: "./products/kid9.jpeg",
    name_product: "Puff Sleeves Backless Party Dress ",
    price: " 899 EGP",
    category: "kids product "
  },

  {
    id: "33",
    imgUrl: "./products/kid10.jpeg",
    name_product: "Full White Suit ",
    price: "890 EGP",
    category: "kids product "
  },

  {
    id: "34",
    imgUrl: "./products/kid11.jpeg",
    name_product: "Gary T-Shirt ",
    price: "450  EGP",
    category: "kids product "
  },

  {
    id: "35",
    imgUrl: "./products/kid12.jpeg",
    name_product: "Full Suit Baby Blue",
    price: "850 EGP",
    category: "kids product "
  },



  {
    id: "36",
    imgUrl: "./products/sh1.jpeg",
    name_product: "White Rainbow Baby Girl ",
    price: "600 EGP",
    category: "shoes product "
  },

  {
    id: "37",
    imgUrl: "./products/sh2.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },


  {
    id: "38",
    imgUrl: "./products/sh3.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },
  {
    id: "39",
    imgUrl: "./products/sh4.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },

  {
    id: "40",
    imgUrl: "./products/sh5.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },

  {
    id: "41",
    imgUrl: "./products/sh6.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },

  {
    id: "42",
    imgUrl: "./products/sh7.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },

  {
    id: "43",
    imgUrl: "./products/sh8.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },

  {
    id: "44",
    imgUrl: "./products/sh9.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },
  {
    id: "45",
    imgUrl: "./products/sh10.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },

  {
    id: "46",
    imgUrl: "./products/sh11.jpeg",
    name_product: "second",
    price: "600 EGP",
    category: "shoes product "
  },
  {
    id: "47",
    imgUrl: "./products/sh12.jpeg",
    name_product: "second",
    price: "899 EGP",
    category: "shoes product "
  },

  {
    id: "48",
    imgUrl: "./products/men3.jpeg",
    name_product: "SOFT WAFFLE HOODIE T-SHIRT ",
    price: "899 EGP",
    category: "men product "
  }
]
//~ get element which contain allProducts 
let allProducts       =document.getElementsByClassName("allProducts")
 
  //* function to set product in the page
  function setProduct(){
let productHtml=products_js.map((product)=>{
  return `
<div class="product">
<img src=${product.imgUrl}>
<div class="product_details">
<h3 class="product_name">${product.name_product.toLocaleLowerCase()}</h3>
<p> ${product.category.toLocaleLowerCase()}</p>
<p> ${product.price}</p>
</div>
<div class="product_action">
            <button class="add_cart" onclick="toArray(${product.id})">add to cart  <i class="fa-solid fa-cart-plus"></i>
</button>
<i class="fa-regular fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>
</div> 
`
})
allProducts[0].innerHTML+=productHtml
  }
  setProduct()


  //* cart details to show 
let cart               =document.querySelector(".cart")
let close              =document.querySelector(".close")
let fa_cart_shopping   =document.querySelector(".fa-cart-shopping") //^basket of num product at cart products

let cart_products       =document.querySelector(".cart_products")  //^ which contain products i added them to cart


//~to show the cart window
fa_cart_shopping.addEventListener("click",function(){
  cart.classList.add("active")
})
//~to close the cart window
close.addEventListener("click",function(){
  cart.classList.remove("active")
})



  //* function to add product to Array
  //* function to never remove data from local storage after referish and adding another object

 
  // function saveTheLastData (){
  // if (localStorage.cart_products!=null){
  //     arrayUsersData=JSON.parse(localStorage.cart_products)
  // }
  // else{
  //   cartArray=[]
  // }}
  // saveTheLastData ()

  let products_storage = JSON.parse(localStorage.getItem("cart_products"));
  let cartArray = products_storage? products_storage : [];

// cart_counter() //~to show the img which say there is no product in the cart 
function toArray(id) {
  let product = products_js.find(product => product.id == id);

    let index = cartArray.findIndex(ele => ele.id == id);
    if (index == -1) {
      cartArray=[...cartArray,product]
      console.log(cartArray)
      toCart()
      localStorage.setItem('cart_products', JSON.stringify(cartArray));
     
      calculatePrice();
    } else {
      alert('Product already exists in cart');
    }
   
  }

 //&* another way or i can use find function
//  function toArray(id) {
//   let product = products_js.find(product => product.id == id);
//   if (product) {
//     cartArray.push(product);
//     toCart();
//   }
// }

//* function to add elements of array in the cart
toCart()
function toCart(){

  // debugger
  // if(localStorage.getItem("cart_products")){
  //   cartArray=JSON.parse(localStorage.getItem("cart_products"))
  // }
  let choosenProduct="" ;
 
  for(let i=0;i<cartArray.length;i++){
  choosenProduct= ` 
  <div style="height:365px;   width:300px;" class="product">
  <img src=${cartArray[i].imgUrl}>

  <div class="product_details">
  <h3 class="product_name">${cartArray[i].name_product}</h3>
  <p> ${cartArray[i].category}</p>
  <p> ${cartArray[i].price}</p>
  </div>
 <i  style="color:red; font-size:25px;" class="< fa-solid fa-trash removeBtn"> </i>
  ` ;
  cart_products.innerHTML+=choosenProduct
            }
          
            // console.log(choosenProduct)
            // console.log(cartArray)
            // console.log(cart_products) 
  // console.log(choosenProduct)
 
  removeProduct()
  // cart_counter()
}
toCart()
 



//   //* function to count products in cart
// function cart_counter(){
//   let count_products=document.querySelector(".count_products");
//   let cart_product_img = document.createElement("img")
//   cart_product_img.src="./cart is empty.PNG"

  
//   if (cart_products.children.length === 0 ) {
   
    
//     cart_products.appendChild(cart_product_img);
//     count_products.innerHTML = cart_products.children.length-1}
     
//   else {

//  cart_product_img.remove()
//     count_products.innerHTML = cart_products.children.length
//   }

//   }
      


//^ task to remove product from cart

function removeProduct(){
  let removeBtn          =document.querySelectorAll(".removeBtn");

  removeBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{ 
      e.target.parentNode.remove()
      // cart_counter(); // call the cart_counter function to update the cart counter
      calculatePrice()
    });
  });
}



//^ function for calculation product
function calculatePrice(){
  
  let totalPrice = cartArray.reduce((acc, product) => parseFloat(acc) + parseFloat(product.price),0);
  document.querySelector('.total_price').innerHTML=`Total Price: ${totalPrice} EGP`;
  removeProduct()
}
calculatePrice()

//* function to search by category or name of product 
function searchFun(searchInput) {
  let searchProduct = "";
  let inputVal = searchInput.toLowerCase().trim().toLocaleLowerCase();
  for (let i = 0; i < products_js.length; i++) {
    if (products_js[i].name_product.includes(inputVal)||
    products_js[i].category.includes(inputVal)) {
      
      searchProduct += `
        <div class="product">
          <img src=${products_js[i].imgUrl}>
          <div class="product_details">
            <h3 class="product_name">${products_js[i].name_product}</h3>
            <p> ${products_js[i].category}</p>
            <p> ${products_js[i].price}</p>
          </div>
          <div class="product_action">
            <button class="add_cart" onclick="toArray(${products_js[i].id})">add to cart <i class="fa-solid fa-cart-plus"></i></button>
            <i class="fa-regular fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      `;
    }
  allProducts[0].innerHTML=searchProduct

  }
}

//* to show drob down 

let categories_drobDown=document.querySelector(".categories_drobDown")
function showDrobdown () {
  
    categories_drobDown.classList.toggle('show')
  }


  //* functions to add products to each own categories
  //~ the first category women category
let all_kichen_products=document.querySelector(".all_kichen_products")
   function addwomenProduct() {
 let women_product=""
    for (let i = 0; i < products_js.length; i++) {
      if (products_js[i].category.includes("women")) {
       
        women_product += `
          <div class="product">
            <img src=${products_js[i].imgUrl}>
            <div class="product_details">
              <h3 class="product_name">${products_js[i].name_product}</h3>
              <p> ${products_js[i].category}</p>
              <p> ${products_js[i].price}</p>
            </div>
            <div class="product_action">
              <button class="add_cart" onclick="toArray(${products_js[i].id})">add to cart <i class="fa-solid fa-cart-plus"></i></button>
              <i class="fa-regular fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        `;
      }
      all_kichen_products.innerHTML=women_product
  
    }
  }
  addwomenProduct()

 //~ the second category men category
 let all_men_products=document.querySelector(".all_men_products")
 function addelmenProduct() {
let men_product=""
   for (let i = 0; i < products_js.length; i++) {
     if (products_js[i].category.includes("men")) {
      
       men_product += `
         <div class="product">
           <img src=${products_js[i].imgUrl}>
           <div class="product_details">
             <h3 class="product_name">${products_js[i].name_product}</h3>
             <p> ${products_js[i].category}</p>
             <p> ${products_js[i].price}</p>
           </div>
           <div class="product_action">
             <button class="add_cart" onclick="toArray(${products_js[i].id})">add to cart <i class="fa-solid fa-cart-plus"></i></button>
             <i class="fa-regular fa-star"></i>
             <i class="fa-solid fa-star"></i>
           </div>
         </div>
       `;
     }
     all_men_products.innerHTML=men_product

    
 
 }}
 addelmenProduct()

   //~ the third category kids category
   let all_kids_products=document.querySelector(".all_kids_products")
    function addkidsProduct() {
  let kids_product=""
     for (let i = 0; i < products_js.length; i++) {
       if (products_js[i].category.includes("kids")) {
        
        kids_product += `
           <div class="product">
             <img src=${products_js[i].imgUrl}>
             <div class="product_details">
               <h3 class="product_name">${products_js[i].name_product}</h3>
               <p> ${products_js[i].category}</p>
               <p> ${products_js[i].price}</p>
             </div>
             <div class="product_action">
               <button class="add_cart" onclick="toArray(${products_js[i].id})">add to cart <i class="fa-solid fa-cart-plus"></i></button>
               <i class="fa-regular fa-star"></i>
               <i class="fa-solid fa-star"></i>
             </div>
           </div>
         `;
       }
       all_kids_products.innerHTML=kids_product
     
   
     }}
   addkidsProduct()

  //~ the fourth category shoes category
  let all_shoes_products=document.querySelector(".all_shoes_products")
   function addshoesProduct() {
 let shoes_product=""
    for (let i = 0; i < products_js.length; i++) {
      if (products_js[i].category.includes("shoes")) {
       
        shoes_product += `
          <div class="product">
            <img src=${products_js[i].imgUrl}>
            <div class="product_details">
              <h3 class="product_name">${products_js[i].name_product}</h3>
              <p> ${products_js[i].category}</p>
              <p> ${products_js[i].price}</p>
            </div>
            <div class="product_action">
              <button class="add_cart" onclick="toArray(${products_js[i].id})">add to cart <i class="fa-solid fa-cart-plus"></i></button>
              <i class="fa-regular fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        `;
      }
      all_shoes_products.innerHTML=shoes_product
  
    }
  }
  addshoesProduct()



    //* function to going to the categorys
  //   let categories = document.querySelectorAll('.category')

  //   function activeCategories(){

  //   categories.forEach(function(element){
  //  if (element.classList== ){

  //  } 
   
   
  //     })}


      //*functions to display category block or noe 

      //& first category

      let secproducts       =document.querySelector('.secproducts');
      let secwomen          =document.querySelector('.secwomen');
      let secshoes          =document.querySelector('.secshoes');
      let seckids           =document.querySelector('.seckids');
      let secmen            =document.querySelector('.secmen');
      let categories        =document.querySelectorAll('.secmen');  
      
    // to show all products randomly
     function showAll(){
     
      secproducts.style.display='block';
      secwomen.style.display='none';
      secshoes.style.display='none';
      seckids.style.display='none';
      secmen.style.display='none';
     }

     // to show just women products 
     function showwomen(){
      
      secproducts.style.display='none';
      secwomen.style.display='block';
      secshoes.style.display='none';
      seckids.style.display='none';
      secmen.style.display='none';
     } 
     // to show just men products 
     function showmen(){
      secproducts.style.display='none';
      secwomen.style.display='none';
      secshoes.style.display='none';
      seckids.style.display='none';
      secmen.style.display='block';
     }
      // to show just kides products 
      function showkids(){
        secproducts.style.display='none';
   secwomen.style.display='none';
   secshoes.style.display='none';
   seckids.style.display='block';
   secmen.style.display='none';
  } 
     // to show just shoes products 
     function showshoes(){
     
      secproducts.style.display='none';
      secwomen.style.display='none';
      secshoes.style.display='block';
      seckids.style.display='none';
      secmen.style.display='none';
     } 


     