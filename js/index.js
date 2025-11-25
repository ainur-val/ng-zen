import { Download } from "./components/Download/Download.js";
import { Warranty } from "./components/Warranty/Warranty.js";
import { Care } from "./components/Care/Care.js";
import { Cashback } from "./components/Cashback/Cashback.js";
import { data } from "../data/data.js";
import { Partners } from "./components/Partners/Partners.js";
import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { Order } from "./components/Order/Order.js";

const $root = document.getElementById('root');

if ($root) {
$root.insertAdjacentHTML("afterbegin", Header());

$root.insertAdjacentHTML("beforeend", Download(data.download));

$root.insertAdjacentHTML("beforeend", Warranty(data.warranty));

$root.insertAdjacentHTML("beforeend", Care(data.care));

$root.insertAdjacentHTML("beforeend", Cashback(data.cashback));

$root.insertAdjacentHTML("beforeend", Partners(data.partners));

$root.insertAdjacentHTML("beforeend", Footer());

$root.insertAdjacentHTML("beforeend", Order());
}


