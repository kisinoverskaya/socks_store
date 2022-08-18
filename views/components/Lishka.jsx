const React = require("react");

const Lishka = ({ el }) => {
  return (
    <li data-id={el.id}>
      <b>{el.title}</b>, цвет <b>{el.color}</b>
      <div className="counter">
        <span className="minus">-</span>
        <input type="text" className="accumulator" />
        <span className="plus">+</span>
      </div>
      <span className="destroy">X</span>
    </li>
  );
};

module.exports = Lishka;
