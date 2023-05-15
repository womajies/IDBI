const basketQuantity = document.querySelector('#basket');
const basketBtns = document.querySelectorAll('.products-item__basket');

basketBtns.forEach(el => {
  el.addEventListener('click', (evt) => {
    const currentProduct = evt.currentTarget.closest('.products-item');
    currentProduct.classList.toggle('products-item--basket');

    if (currentProduct.classList.contains('products-item--basket')) {
      let storeBasketCount = JSON.parse(localStorage.getItem('basket'));

      if (storeBasketCount) {
        storeBasketCount += 1;

        localStorage.setItem('basket', JSON.stringify(storeBasketCount));
      } else {
        localStorage.setItem('basket', JSON.stringify(1));
      }
    } else {
      let storeBasketCount = JSON.parse(localStorage.getItem('basket'));

      storeBasketCount -= 1;
      localStorage.setItem('basket', JSON.stringify(storeBasketCount));
    }

    basketQuantity.querySelector('.header__actions-count').textContent = localStorage.getItem('basket');
  });
});
