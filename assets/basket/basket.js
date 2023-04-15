class BasketComponent {
  constructor(basketOrderElement) {
    this.basketOrderElement = basketOrderElement;
    this.productsMap = new Map();
    this.totalPrice = 0;
    this.initializationView();
  }

  // Public.
  addProduct(book) {
    this.appendCard(book);
    this.totalPrice += book.price;
    this.totalPriceElement.innerText = 'Total price: $ ' + this.totalPrice;
    this.dispatchEvent();
  }

  // Private.
  appendCard(book) {
    const cardElement = createBasketBookCard(book);
    this.productsMap.set(cardElement, book);
    this.listElement.appendChild(cardElement);
  }

  deleteProduct(cardElement) {
    const book = this.productsMap.get(cardElement);
    this.productsMap.delete(cardElement);
    cardElement.remove();
    this.totalPrice -= book.price;
    this.totalPriceElement.innerText = 'Total price: $ ' + this.totalPrice;
    this.dispatchEvent();
  }

  // Создать пользовательское событие с данными о текущем количестве товаров.
  dispatchEvent() {
    const productsCountChangedEvent = new CustomEvent('productsCountChanged', {
      detail: {
        count: this.productsMap.size,
      },
    });
    this.basketOrderElement.dispatchEvent(productsCountChangedEvent);
  }

  // Первоначальная подготовка визуального представления.
  initializationView() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('book-shop-basket__container');

    this.listElement = document.createElement('div');
    this.listElement.classList.add('book-shop-basket__list');
    // Обработать все клики внутри элемента для вывода списка карточек.
    // Клики по кнопкам интерпретировать как команду для удаления родителькой карточки и соответствующего товара.
    this.listElement.addEventListener('click', (pointerEvent) => {
      if (!pointerEvent.target.classList.contains('book-card-basket__button-close')) {
        return;
      }
      this.deleteProduct(pointerEvent.target.parentElement);
    });
    containerElement.appendChild(this.listElement);

    this.totalPriceElement = document.createElement('div');
    this.totalPriceElement.classList.add('book-shop-basket__total-price');
    containerElement.appendChild(this.totalPriceElement);

    this.basketOrderElement.appendChild(containerElement);
  }
}
