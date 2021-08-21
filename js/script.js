let viewProductsMenu = document.querySelector('.products-on-cart div');
let badge = document.querySelector('.badge');
let shoppingCartBtn = document.querySelector('.shoppingCart');
let productsContainer = document.querySelector('.products');
let productDataBase = JSON.parse(localStorage.getItem('products'));
let favoriteBtn = document.querySelector('.heart');
let productInCart = JSON.parse(localStorage.getItem('productInCart')) || [];
let favoriteProducts =
	JSON.parse(localStorage.getItem('favoriteProducts')) || [];
let showPorducts;
(showPorducts = function (products = []) {
	let productUI = products
		.map((product) => {
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
                <i class="shop fas fa-cart-plus"></i>
				<i class="heart far fa-heart" onclick='addToFavorite(this,${product.id})'></i>
				
            </div>
        </div>`;
		})
		.join('');
	productsContainer.innerHTML = productUI;
})(productDataBase);

function chackerUserLogIn(e) {
	if (localStorage.getItem('username')) {
	} else {
		location = 'login.html';
	}
}

// Show products In Cart Menu
(function cartMenuData() {
	if (productInCart) {
		// let itemTitle;
		productInCart.forEach((item) => {
			viewProductsMenu.innerHTML += `<p>${item.title}=>${item.qty}</p>`;
		});
		badge.innerHTML = productInCart.reduce((tot, curr) => tot + curr.qty, 0);
		badge.style.display = 'block';
	}
})();

shoppingCartBtn.addEventListener('click', openMnue);
function openMnue() {
	if (
		viewProductsMenu.children.length > 0 &&
		getComputedStyle(document.querySelector('.products-on-cart')).display ==
			'none'
	) {
		document.querySelector('.products-on-cart').style.display = 'block';
	} else {
		document.querySelector('.products-on-cart').style.display = 'none';
	}
}

function saveItemData(id) {
	localStorage.setItem('itemId', id);
	location.href = 'cartDetails.html';
}
// ! Seacrh input By Title
function search(item, array) {
	let product = array.filter((ele) => ele.title.includes(item));
	if (product.length == 0) {
	} else {
		showPorducts(product);
	}
}
let searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', function (e) {
	if (e.target.value.length > 0) {
		search(e.target.value, productDataBase);
	} else {
		showPorducts(productDataBase);
	}
});

function addToFavorite(element, id) {}

let addItemToFavorite = [...favoriteProducts];
function addToFavorite(element, id) {
	if (localStorage.getItem('username')) {
		let itemFavorite = productDataBase.find((ele) => ele.id == id);
		if (element.classList.contains('far')) {
			element.className = 'heart heard--active fas fa-heart';

			addItemToFavorite.push(itemFavorite);
			localStorage.setItem(
				'favoriteProducts',
				JSON.stringify(addItemToFavorite),
			);
		} else {
			element.className = 'heart far fa-heart';
			addItemToFavorite = addItemToFavorite.filter(
				(ele) => ele.id != itemFavorite.id,
			);
			localStorage.setItem(
				'favoriteProducts',
				JSON.stringify(addItemToFavorite),
			);
		}
	} else {
		window.location = 'login.html';
	}
}
