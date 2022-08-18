const React = require("react");

const Lishka = ({ el }) => {
  return (
    <li data-id={el.id}>
      <b>{el.title}</b>, цвет <b>{el.color}</b>
      <span className="destroy">X</span>{" "}
    </li>
  );
};

module.exports = Lishka;
