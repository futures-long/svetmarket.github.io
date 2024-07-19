document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateButtonStyles(cart);
});

function updateButtonStyles(cart) {
  const buttons = document.querySelectorAll('.button-prod');
  buttons.forEach(button => {
    const product = button.dataset.product;
    if (cart.some(item => item.product === product)) {
      button.style.backgroundColor = 'var(--tg-theme-accent-text-color)';
      button.style.Color = 'var(--tg-theme-bg-color)';
    } else {
      button.style.backgroundColor = 'var(--tg-theme-text-color)';
      button.style.Color = 'var(--tg-theme-bg-color)';
    }
  });
}

function addToCart(product, price, button) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.product === product);

  if (productIndex > -1) {
    cart.splice(productIndex, 1);
    button.style.backgroundColor = 'var(--tg-theme-text-color)';
    button.style.Color = 'var(--tg-theme-bg-color)';
  } else {
    cart.push({ product, price });
    button.style.backgroundColor = 'var(--tg-theme-accent-text-color)';
    button.style.Color = 'var(--tg-theme-bg-color)';
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

function showProductInfo(url) {
  window.location.href = url;
}

function redirectToCart() {
  window.location.href = 'products.html';
}
