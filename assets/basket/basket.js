class BasketComponent {
  constructor(basketOrderElement) {
    this.basketOrderElement = basketOrderElement;
    this.list = [];
    this.totalPrice = 0;
    this.initializationView();
  }

  // Public.
  addProduct(book) {
    this.list.push(book);
    this.appendCard(book);
    this.totalPrice += book.price;
    this.totalPriceElement.innerText = 'Total price: $ ' + this.totalPrice;
  }

  // Private.
  appendCard(book) {
    const card = createBasketBookCard(book);
    this.listElement.appendChild(card);
  }

  // Первоначальная подготовка визуального представления.
  initializationView() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('book-shop-basket__container');

    this.listElement = document.createElement('div');
    this.listElement.classList.add('book-shop-basket__list');
    containerElement.appendChild(this.listElement);

    this.totalPriceElement = document.createElement('div');
    this.totalPriceElement.classList.add('book-shop-basket__total-price');
    containerElement.appendChild(this.totalPriceElement);

    this.basketOrderElement.appendChild(containerElement);
  }
}
