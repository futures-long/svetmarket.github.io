document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartElement = document.getElementById('cart');
  const totalElement = document.getElementById('total');

  cartElement.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - $${item.price}`;
    cartElement.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = `Total: $${total.toFixed(2)}`;
});
