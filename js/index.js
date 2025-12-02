import { Download } from './components/Download/Download.js';
import { Warranty } from './components/Warranty/Warranty.js';
import { Care } from './components/Care/Care.js';
import { Cashback } from './components/Cashback/Cashback.js';
import { Partners } from './components/Partners/Partners.js';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Order } from './components/Order/Order.js';

(async () => {
  const url = 'http://localhost:3000/api/data';
  const response = await fetch(url);
  const resData = await response.json();
  if(!resData) return;

  const $root = document.getElementById('root');
  if(!$root) return;
  
  $root.insertAdjacentHTML('afterbegin', Header());
  $root.insertAdjacentHTML('beforeend', Download(resData.data.download));
  $root.insertAdjacentHTML('beforeend', Warranty(resData.data.warranty));
  $root.insertAdjacentHTML('beforeend', Care(resData.data.care));
  $root.insertAdjacentHTML('beforeend', Cashback(resData.data.cashback));
  $root.insertAdjacentHTML('beforeend', Partners(resData.data.partners));
  $root.insertAdjacentHTML('beforeend', Footer());
  $root.insertAdjacentHTML('beforeend', Order());

})();




