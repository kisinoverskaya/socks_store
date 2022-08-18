const React = require("react");
const Login = require("./Login");
const Registration = require("./Registration");

const Nav = ({ findUser }) => {
  return (
    <header>
      <h1>socks shop</h1>
    {findUser? (
      <div>
     <h2>Привет {findUser.name}</h2>
     <nav>
     <a href="/">Главная</a>
      <a href="/cart/items">Корзина</a>
      <a href="/">Избранное</a>
      <a href="/auth">Выйти</a>
      </nav>
      </div>
    ):(
      <div>
    <nav>
      <a href="/">Главная</a>
      <a href="/" className="register">Регистрация</a>
      <a href="/" className="logIn">Войти</a>
    </nav>
  <div className="registration">
  <Registration />
  </div>
  <div className="login">
  <Login />
  </div>
  </div>
    )}
    </header>
  )
};

module.exports = Nav;