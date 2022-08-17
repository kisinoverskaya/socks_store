const React = require("react");
const Layout = require("../Layout");
const Login = require("./Login");
const Registration = require("./Registration");

const Main = ({ findUser }) => {
  return (
    <Layout>
      <header>
        <h1>socks store</h1>
        {findUser && <h2>Привет {findUser.name}</h2>}
        <nav>
          <a href="/">Главная</a>
          <a href="/">Новинки</a>
          {findUser ? null : (
            <a href="/" className="register">
              Регистрация
            </a>
          )}
          {findUser ? <a href="/">Личный кабинет</a> : null}
          {findUser ? (
            <a href="/logout">Выйти</a>
          ) : (
            <a href="/" className="logIn">
              Войти
            </a>
          )}
        </nav>
        <div className="registration">
          <Registration />
        </div>
        <div className="login">
          <Login />
        </div>
      </header>
    </Layout>
  );
};

module.exports = Main;
