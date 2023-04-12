function createContent({imageLink, description}) {
  const element = document.createElement('div');
  element.classList.add('book-shop-popup__container');
  element.innerHTML = `
    <div class="book-shop-popup__container">
    <div class="book-shop-title-container">
      <h3 class="book-shop-header-three book-shop-popup__header-book-title">${imageLink}</h3>
      <button class="book-shop-button-close">&times;</button>
    </div>
    <div class="book-shop-popup-description">
      <h5 class="book-shop-header-five book-shop-popup__header-book-abstract">${description}</h5>
    </div>
    </div>
  `;
  return element;
}

function createPopup() {
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('book-shop-popup__section');

  const containerElement = document.createElement('div');
  containerElement.classList.add('book-shop-popup__container');

  const closeElement = document.createElement('button');
  closeElement.classList.add('book-shop-button-close');
  closeElement.innerHTML = '&times;';

  containerElement.appendChild(closeElement);
  sectionElement.appendChild(containerElement);

  return {
    closeElement,
    containerElement,
    sectionElement,
  };
}

function createBlackout() {
  const element = document.createElement('div');
  element.classList.add('book-shop-popup__blackout');
  return element;
}

function openPopup(contentElement) {
  const blackoutElement = createBlackout();
  document.body.appendChild(blackoutElement);
  const {
    closeElement,
    containerElement,
    sectionElement,
  } = createPopup();
  containerElement.appendChild(contentElement);
  document.body.appendChild(sectionElement);

  const handleClick = (pointerEvent) => {
    if (pointerEvent.target !== sectionElement && pointerEvent.target !== closeElement) return;
    closePopup(blackoutElement, sectionElement);
    sectionElement.removeEventListener('click', handleClick);
  };

  sectionElement.addEventListener('click', handleClick);
}

function closePopup(blackoutElement, popupElement) {
  blackoutElement.remove();
  popupElement.remove();
}
