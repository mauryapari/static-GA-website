const products = {
   'Electronics': ['Samsung Galaxy S21', 'Apple iPhone 12', 'Sony Playstation 5'],
   'Clothing': ['Levi\'s 501 Jeans', 'Nike Air Max 90', 'Adidas Ultraboost'],
   'Home': ['KitchenAid Stand Mixer', 'Dyson V11 Vacuum', 'Nespresso Vertuo Coffee Maker']
};

const price = {
   'Samsung Galaxy S21': { id: 1, value: 200.00 },
   'Apple iPhone 12': { id: 2, value: 199.98 },
   'Sony Playstation 5': { id: 3, value: 499.98 },
   'Levi\'s 501 Jeans': { id: 4, value: 19.98 },
   'Nike Air Max 90': { id: 5, value: 159.98 },
   'Adidas Ultraboost': { id: 6, value: 299.98 },
   'KitchenAid Stand Mixer': { id: 7, value: 99.98 },
   'Dyson V11 Vacuum': { id: 8, value: 399.98 },
   'Nespresso Vertuo Coffee Maker': { id: 9, value: 89.98 }
}



function generateProductName(category) {
   const productIndex = Math.floor(Math.random() * products[category].length);
   const productName = products[category][productIndex];
   return productName;
}

const shareBtnEle = document.querySelectorAll('.custom-event-trigger');
const formEle = document.querySelectorAll('form');
const productBtnEle = document.querySelectorAll('.content button');

formEle.forEach(ele => {
   ele.addEventListener('submit', (e) => {
      e.preventDefault();
      ele.reset();
      gtag('event', 'form_submit', {
         form_id: e.target.id
      })
   })
})

shareBtnEle.forEach(ele => {
   console.log(ele);
   ele.addEventListener('click', (e) => {
      gtag('event', 'share_click', {
         btn_name: e.target.innerText,
      })
   })
})

productBtnEle.forEach(ele => {
   ele.addEventListener('click', (e) => {
      const category = Object.keys(products)[Math.floor(Math.random() * Object.keys(products).length)];
      const product_name = generateProductName(category);
      gtag('event', 'purchase', {
         transaction_id: Math.floor(Math.random() * 10000000).toString(),
         value: price[product_name].value,
         currency: 'USD',
         items: [
            {
               item_id: price[product_name].id,
               item_name: product_name,
               item_category: category,
               price: price[product_name].value,
               quantity: 1
            }
         ]
      })
   })
})