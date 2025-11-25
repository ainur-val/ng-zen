/**
 * @typedef {import('./types').Warranty} Warranty
 */

/**
 * @function Warranty
 * @param {Warranty} data
 * @description Large UI component
 * @returns {string} HTML
 */

export const Warranty = (data) => {
  return /* html */`
    <section class="warranty" id="warranty">
      <div class="warranty__wrapper">
        <div class="warranty__image-block">
          <img src="${data.image.source}" alt="${data.image.description}">
        </div>
        <div class="warranty__text-block">
          <h1 class="warranty__title">${data.title}</h1>
          ${data.texts.map(text => 
            `<p class="warranty__copy">${text}</p>`
          ).join('')}
        </div>
      </div>
    </section>
  `
} 