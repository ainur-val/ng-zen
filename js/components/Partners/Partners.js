/**
 * @typedef {import('./types').Partners} Partners
 */

/**
 * @function Partners
 * @description Large UI Component
 * @param {Partners} data 
 * @returns {string} HTML
 */

export const Partners = (data) => {
  return /* html */`
    <section class="partners" id="partners">
      <div class="partners__wrapper">
        <div class="partners__image-block">
          ${data.map(item => 
            `<a class="partners__link" href="${item.link}">
              <img src="${item.source}" alt="${item.description}">
            </a>`
          ).join('')}
        </div>
      </div>
    </section>
  `
}