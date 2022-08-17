const React = require("react");

const Login = () => {
  return (
    <form action="/auth/login" method="post" name="login" className="reg">
      <h2>Войти</h2>
      <input type="text" name="email" placeholder="Введите почту" />
      <input type="text" name="pass" placeholder="Введите пароль" />
      <button type="submit">Войти</button>
    </form>
  );
};

module.exports = Login;
