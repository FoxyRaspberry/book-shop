document.addEventListener('DOMContentLoaded', () => {
  function getMinDeliveryDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDateString = (tomorrow.getDate() + '').padStart(2, '0');
    const tomorrowMonthString = (tomorrow.getMonth() + 1 + '').padStart(2, '0');
    return `${tomorrow.getFullYear()}-${tomorrowMonthString}-${tomorrowDateString}`;
  }

  const deliveryDateElement = document.getElementsByClassName('delivery__date')[0];
  deliveryDateElement.setAttribute('min', getMinDeliveryDate());

  const formElement = document.forms[0];
  formElement.addEventListener('focusout', (event) => {
    if (event.target.classList.contains('delivery__input')) {
      const inputType = event.target.getAttribute('type');
      if (inputType === 'text') {
        event.target.classList.add('delivery__input-text--touched');
      } else if (inputType === 'date') {
        event.target.classList.add('delivery__input-date--touched');
      }
    }
  });

  const deliveryCompleteButtonElement = document.getElementsByClassName('delivery__button-complete')[0];

  formElement.addEventListener('change', (event) => {
    formElement.reportValidity();
    if (!formElement.checkValidity()) {
      deliveryCompleteButtonElement.setAttribute('disabled', 'true');
    }
    else {
      deliveryCompleteButtonElement.removeAttribute('disabled');
    }
  });
  formElement.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
  });
});
