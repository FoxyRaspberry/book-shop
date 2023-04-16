function createBookCard({ imageLink, author, id, price }) {
  const element = document.createElement('div');
  element.classList.add('book-card__book-card');
  element.setAttribute('draggable', true);
  element.setAttribute('data-id', id);
  element.innerHTML = `
    <div class="book-card__book-container-img">
      <img class="book-card__book-card-photo" alt="" src="${imageLink}">
      <div class="book-card__author-price-container">
        <div class="book-card__book-author">${author}</div>
        <div class="book-card__book-price">${price}</div>
      </div>
    </div>
    <button class="book-shop-button book-card__button-card">Learn more</button>
    <button class="book-shop-button book-card__button-add-bag">Add to bag</button>
  `;
  return element;
}
