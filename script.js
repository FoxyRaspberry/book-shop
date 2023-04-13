document.addEventListener('DOMContentLoaded', () => {
  function createCoverSection() {
    const element = document.createElement('div');
    element.classList.add('cover__section');
    element.innerHTML = `
      <section class="cover__section">
        <div class="wrapper__section">
          <header class="header__container">
            <h2 class="book-shop-header-two header__container-title">Book Shop</h2>
            <div class="header__container-logo"></div>
          </header>
          <div class="slogan__invitation-container">
            <div class="slogan__text-container">
              <div class="book-shop-header-four slogan__text">
                Welcome to the amazing bookstore!
                Here you will find everything you need at very interesting prices!
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    return element;
  }

  function createCatalogSection() {
    const element = document.createElement('div');
    element.classList.add('catalog__section');
    element.innerHTML = `
      <section class="catalog__section">
        <div class="wrapper__section">
          <header class="catalog__header-container">
            <h2 class="book-shop-header-two catalog__header-container-title">Book Catalog</h2>
          </header>
          <div class="catalog__book-card-container">
            <div class="catalog__book-card">
            </div>
          </div>
        </div>
      </section>
    `;
    return element;
  }

  function createBookBagSection() {
    const element = document.createElement('div');
    element.classList.add('book-bag__section');
    element.innerHTML = `
      <section class="book-bag__section">
        <div class="wrapper__section">
          <header class="book-bag__header-container">
              <h2 class="book-shop-header-two book-bag__header-title">My book bag</h2>
              <div class="book-bag__header-icon"></div>
          </header>
          <div class="book-bag__order-container">
            <div class="book-bag__order">
            </div>
            <button class="book-shop-button book-bag__order-button">Confirm order</button>
          </div>
        </div>
      </section>
    `;
    return element;
  }

  document.body.appendChild(createCoverSection());
  document.body.appendChild(createCatalogSection());
  document.body.appendChild(createBookBagSection());

  const cardsContainerElement = document.getElementsByClassName('catalog__book-card')[0];
  function displayBooksCards(books, cardsContainerElement) {
    books.forEach(book => {
      const bookCardElement = createBookCard(book);
      bookCardElement.addEventListener('click', (pointerEvent) => {
        // Создаем информационную карточку книги и показываем попап с ней.
        const bookPopupContent = createContent(book);
        openPopup(bookPopupContent);
      });
      cardsContainerElement.appendChild(bookCardElement);
    });
  }
  
  const books = getBooks();
  displayBooksCards(books, cardsContainerElement);
});
