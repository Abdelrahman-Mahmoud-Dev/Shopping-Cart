

function createProtuct(allProducts = []){
    if(JSON.parse(localStorage.getItem('products')).length === 0){
        document.querySelector('.empty').style.display = 'block'
    }
    let products =  JSON.parse(localStorage.getItem('products')) ||  allProducts
    console.log('here')
     let productUI = products.map(  (product)=>{
      
        return `
            <div class="product-item">
            <img src=${product.imageUrl} class="product-item-img" alt="Flowers">
            <div class="product-info">
                <h2>${product.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>size : ${product.size}</span>
            </div>
            <div class="product-actions">
                <button class="add-to-cart" onclick = 'remove(event,${product.id})'>remove to cart</button>
                <i class="heart fas fa-cart-plus"></i>
                <!-- <i class="far fa-heart"></i> -->
            </div>
        </div>
        `

    }).join('')
    document.querySelector('.products').innerHTML = productUI

}

createProtuct()
// if(pocductsInCarts){
//     let items = JSON.parse(pocductsInCarts)

//     createProtuct(items)
// } 



function remove(event,id){
    let products =  localStorage.getItem('products');
    let items = JSON.parse(products)
    let itemsFilted = items.filter(ele => ele.id != id)
    localStorage.setItem('products',JSON.stringify(itemsFilted))
    createProtuct(itemsFilted)
} 