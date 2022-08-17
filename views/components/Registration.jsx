const React = require("react");

const Registration = () => {
  return (
    <form action="/" method="post" name="reg" className="reg">
      <h2>Регистрация</h2>
      <input type="text" name="name" placeholder="Введите имя" />
      <input type="text" name="email" placeholder="Введите почту" />
      <input type="text" name="pass" placeholder="Введите пароль" />
      <button type="submit">Регистрация</button>
    </form>
  );
};

module.exports = Registration;
