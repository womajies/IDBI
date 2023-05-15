const favoriteQuantity = document.querySelector('#favorite');
const favoriteBtns = document.querySelectorAll('.products-item__favorite');

favoriteBtns.forEach(el => {
  el.addEventListener('click', (evt) => {
    const currentProduct = evt.currentTarget.closest('.products-item');
    currentProduct.classList.toggle('products-item--favorite');

    if (currentProduct.classList.contains('products-item--favorite')) {
      let storeFavoriteCount = JSON.parse(localStorage.getItem('favorite'));

      if (storeFavoriteCount) {
        storeFavoriteCount += 1;

        localStorage.setItem('favorite', JSON.stringify(storeFavoriteCount));
      } else {
        localStorage.setItem('favorite', JSON.stringify(1));
      }
    } else {
      let storeFavoriteCount = JSON.parse(localStorage.getItem('favorite'));

      storeFavoriteCount -= 1;
      localStorage.setItem('favorite', JSON.stringify(storeFavoriteCount));
    }

    favoriteQuantity.querySelector('.header__actions-count').textContent = localStorage.getItem('favorite');
  });
});
