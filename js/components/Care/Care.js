/**
 * @typedef {import('./types').Care} Care
 */

/**
 * @function Care
 * @description Large UI component
 * @param {Care} data 
 * @returns {string} HTML
 */

export const Care = (data) => {
  return /* html */`
    <section class="care" id="care">
      <div class="care__wrapper">
        <div class="care__text-block">
          <h1 class="care__title">${data.title}</h1>
          ${data.texts.map(text => 
            `<p class="care__copy">${text}</p>`
          ).join('')}
        </div>
        <div class="care__image-block">
          <img src="${data.image.source}" alt="${data.image.description}">
        </div>
      </div>
    </section>
  `
} 