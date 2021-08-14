let viewProductsMenu = document.querySelector('.products-on-cart div');
let badge = document.querySelector('.badge');
let shoppingCartBtn = document.querySelector('.shoppingCart');
let productsContainer = document.querySelector('.products');
let productDataBase = JSON.parse(localStorage.getItem('products'));
let showPorducts;

(showPorducts = function (products=[]) {
    let productUI = products.map((product) => {
        return `
            <div class="product-item">
            <img src=${product.imageUrl} class="product-item-img" alt="Flowers">
            <div class="product-info">
                <a onclick="saveItemData(${product.id})">${product.title}</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>size : ${product.size}</span>
            </div>
            <div class="product-actions">
                <button class="add-to-cart" onclick = 'addCart(${product.id})'>Add to cart</button>
                <i class="heart fas fa-cart-plus"></i>
                <!-- <i class="far fa-heart"></i> -->
            </div>
        </div>`

    }).join('')
    productsContainer.innerHTML = productUI
})(productDataBase);



function chackerUserLogIn(e) {
    if (localStorage.getItem('username')) {      
    } else {
        location = 'login.html'
    }
};












let dataShowInMenu = JSON.parse(localStorage.getItem('productInCart')) || [];
// productInCart

(function cartMenuData() {
    if (dataShowInMenu) {
        let itemTitle;
        dataShowInMenu.forEach(item => {
               viewProductsMenu.innerHTML += `<p>${item.title} </p>`    
        })    
        badge.innerHTML = document.querySelectorAll('.products-on-cart p').length
        badge.style.display = 'block'
    }
})();



let addItem = [] ;
function addCart(id) {
    if (localStorage.getItem('username')) {
        let itemChossen = products.find(ele => ele.id == id);
        addItem = [...addItem, itemChossen]

        localStorage.setItem('productInCart',JSON.stringify(addItem))
        viewProductsMenu.innerHTML += `<p>${itemChossen.title} </p>`  
        viewProductsMenu = 'block'
        badge.style.display = 'block'
        badge.innerHTML = document.querySelectorAll('.products-on-cart p').length


    } else {
        window.location = 'login.html'

    }

}



shoppingCartBtn.addEventListener('click', openMnue)

function openMnue() {
    if (viewProductsMenu.children.length > 0 && getComputedStyle(document.querySelector('.products-on-cart')).display == "none") {
      document.querySelector('.products-on-cart').style.display = 'block'
    } else {
        document.querySelector('.products-on-cart').style.display = 'none'
    }
}


function saveItemData(id){

    localStorage.setItem('itemId',id)
    location.href = 'cartDetails.html'
}



function search(item,array) {
    let product = array.filter(ele => ele.title.includes(item));
    if(product.length == 0){
          
    }else{

     showPorducts(product)
    }
}

let searchInput = document.querySelector('#search-input')

searchInput.addEventListener('input', function (e) {
        if (e.target.value.length > 0) {
            search(e.target.value, productDataBase)  
        }else{
            showPorducts(productDataBase)
        }
    
} )