function createProtuct(
	products = JSON.parse(localStorage.getItem('productInCart')) || [],
) {
	if (JSON.parse(localStorage.getItem('productInCart')).length === 0) {
		document.querySelector('.empty').style.display = 'block';
	}

	let productUI = products
		.map((product) => {
			return `
            <div class="product-item">
            <img src=${product.imageUrl} class="product-item-img" alt="Flowers">
            <div class="product-info">
                <h2>${product.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>size : ${product.size}</span>
            </div>
            <div class="product-actions">
                <button class="add-to-cart" onclick = 'removeItem(${product.id})'>remove to cart</button>
                <i class="heart fas fa-cart-plus"></i>
                <!-- <i class="far fa-heart"></i> -->
            </div>
        </div>
        `;
		})
		.join('');
	document.querySelector('.products').innerHTML = productUI;
}

createProtuct();

function removeItem(id) {
	let products = JSON.parse(localStorage.getItem('productInCart'));
	let itemsFilted = products.filter((ele) => ele.id != id);
	localStorage.setItem('productInCart', JSON.stringify(itemsFilted));
	createProtuct(itemsFilted);
}
