const colorBtns = document.querySelectorAll('.products-item__colors-btn');

colorBtns.forEach((el) => {
  el.addEventListener('click', (evt) => {
    const currentProduct = evt.currentTarget.closest('.products-item');
    const currentProductImages = currentProduct.querySelectorAll('.products-item__image');
    currentProductImages.forEach(e => {
      e.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    });
  });
});
