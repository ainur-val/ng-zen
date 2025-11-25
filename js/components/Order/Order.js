export const Order = () => {
  
   const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log('Данные формы заказа консультации:');
    console.log('Имя:', data.name);
    console.log('Телефон:', data.phone);
    console.log('Email:', data.email);
    console.log('Способ связи:', data.connection);
    console.log('Согласие с политикой:', data.agree ? 'Да' : 'Нет');

    const overlay = document.querySelector('.order__overlay');
    overlay.style.display = 'none';
  };

  const initOrder = () => {
    const form = document.getElementById('order__form');
    form.addEventListener('submit', handleFormSubmit);
    
    const order__close = document.querySelector('.order__close');
    order__close.addEventListener('click', () => {
      const overlay = document.querySelector('.order__overlay');
      overlay.style.display = 'none';
    })

  };

  setTimeout(initOrder, 0);
  
  return /* html */ `
    <div class="order__overlay">
      <div class="order" id="order">
      <img class="order__close" src="http://127.0.0.1:5500/assets/icons/close.svg" alt="Button close">
        <div class="order__wrapper">
          <form id="order__form">
            <h2 class="order__title">Order a consultation</h2>
            <div class="form-group">
              <input type="text" id="form-name" name="name" placeholder="Name" required>
            </div>
            
            <div class="form-group">
              <input type="tel" id="form-phone" name="phone" placeholder="Tel." required>
            </div>

            <div class="form-group">
              <input type="email" id="form-email" name="email" placeholder="E-mail" required>
            </div>
            
            <div class="form-group">
              <select class="connection" id="connection" name="connection">
                <option value="" disabled selected>Connection</option>
                <option value="telephone">Telephone</option>
                <option value="e-mail">E-mail</option>
                <option value="telegram">Telegram</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            
            <div class="form-privacy">
              <label class="checkbox-label">
                <input type="checkbox" name="agree" required>
                <a>Privacy policy</a>
              </label>
            </div>
            
            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  `
};


