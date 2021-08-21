let products = JSON.parse(localStorage.getItem('products'));
let itemId = localStorage.getItem('itemId');
let itemDetails = products.find((product) => product.id == itemId);

let drawProductDetails = document.querySelector('.products-item');

drawProductDetails.innerHTML = `
              <img src="${itemDetails.imageUrl}" alt="">
                <h2>${itemDetails.title}</h2>
                <span>${itemDetails.size} </span>
`;
