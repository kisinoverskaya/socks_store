const React = require("react");
const Login = require("./Login");
const Registration = require("./Registration");

const Nav = ({ findUser }) => {
  return (
    <header>
      <h1>socks shop</h1>
      {findUser && <h2>Привет {findUser.name}</h2>}
      <nav>
        <a href="/">Главная</a>
        <a href="/cart/items">Корзина</a>
        {findUser ? null : (
          <a href="/" className="register">
            Регистрация
          </a>
        )}
        {findUser ? <a href="/">Избранное</a> : null}
        {findUser ? (
          <a href="/auth">Выйти</a>
        ) : (
          <a href="/" className="logIn">
            Войти
          </a>
        )}
        {console.log(findUser)}
      </nav>
      <div className="registration">
        <Registration />
      </div>
      <div className="login">
        <Login />
      </div>
    </header>
  );
};

module.exports = Nav;
