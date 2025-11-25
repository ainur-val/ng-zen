export const Header = () => {
  return /* html */`
    <header class="header">
    <a class="logo-company" href="/">
      <img src="http://127.0.0.1:5500/assets/icons/logo-header-left.svg" alt="Zen icon">
    </a>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list-item">
          <a class="nav-list-item" href="#!">Download</a>
        </li>
        <li class="nav-list-item">
          <a class="nav-list-item" href="#!">Warranty</a>
        </li>
        <li class="nav-list-item">
          <a class="nav-list-item" href="#!">Care</a>
        </li>
        <li class="nav-list-item">
          <a class="nav-list-item" href="#!">Cashback</a>
        </li>
        <li class="nav-list-item">
          <a class="nav-list-item" href="#!">Clients</a>
        </li>
      </ul>
    </nav>
    <select class="select-lang">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
    <a class="btn-lighting" href="/">
      <img src="http://127.0.0.1:5500/assets/icons/btn _theme_.svg" alt="Button lighting">
    </a>
  </header>
  `
}