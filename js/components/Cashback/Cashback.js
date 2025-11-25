/**
 * @typedef {import('./types').Cashback} Cashback
 */

/**
 * @function Cashback
 * @description Large UI component
 * @param {Cashback} data 
 * @returns {string} HTML
 */

export const Cashback = (data) => {
  
  const initOrder = () => {
    
    const cashback__btn = document.querySelector('.cashback__btn');
    cashback__btn.addEventListener('click', () => {
      const overlay = document.querySelector('.order__overlay');
      overlay.style.display = 'flex';
    })

  };

  setTimeout(initOrder, 0);
  return /* html */`
    <section class="cashback" id="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          <h1 class="cashback__title">${data.title}</h1>
          ${data.texts.map(text => 
            `<p class="cashback__copy">${text}</p>`
          ).join('')}
        </div>
        <button class="cashback__btn">Order a consultation</button>
      </div>
    </section>
  `
} 