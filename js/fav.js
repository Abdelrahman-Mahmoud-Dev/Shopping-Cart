function showFavProtuct(
	products = JSON.parse(localStorage.getItem('favoriteProducts')) || [],
) {
	if (JSON.parse(localStorage.getItem('favoriteProducts')).length === 0) {
		document.querySelector('.empty').style.display = 'block';
	} else {
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
                <button class="add-to-cart" onclick = 'removeItem(${product.id})'>UnLike</button>
                <i class="heart fas fa-cart-plus"></i>
                <!-- <i class="far fa-heart"></i> -->
            </div>
        </div>
        `;
			})
			.join('');
		document.querySelector('.products').innerHTML = productUI;
	}
}

showFavProtuct();

function removeItem(id) {
	let products = JSON.parse(localStorage.getItem('favoriteProducts'));
	let itemsFilted = products.filter((ele) => ele.id != id);
	localStorage.setItem('favoriteProducts', JSON.stringify(itemsFilted));
	showFavProtuct(itemsFilted);
}
