function createBasketBookCard({ title, author, price }) {
  const element = document.createElement('article');
  element.classList.add('book-card-basket__card');
  element.innerHTML = `
    <div class="book-card-basket__book">
      <div class="book-shop-header-five book-card-basket__book-name">${title}</div>
      <div class="book-shop-header-five book-card-basket__book-author">${author}</div>
      <div class="book-shop-header-five book-card-basket__book-price">Price: ${price}</div>
    </div>
    <button class="book-shop-button-close book-card-basket__button-close">&times;</button>
  `;
  return element;
}
