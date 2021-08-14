  let products = JSON.parse(localStorage.getItem('products'));

   let itemId = localStorage.getItem('itemId');
    console.log(itemId)
   let itemDetail = products.find((product) => product.id == itemId)
console.log(itemDetail)




let drawProduct = document.querySelector('.products-item')

drawProduct.innerHTML = `

 <img src="${itemDetail.imageUrl}" alt="">
                <h2>${itemDetail.title}</h2>
                <span>${itemDetail.size} </span>
`