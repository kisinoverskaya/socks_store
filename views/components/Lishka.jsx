const React = require("react");

const Lishka = ({ el }) => {
  return (
    <li data-id={el.id}>
      <b>{el.title}</b>, цвет <b>{el.color}</b>
      <div className="counter">
        <span className="minus">-</span>
        {/* <input type="text" className="accumulator" value={1} /> */}
        <spam className="accumulator">1</spam>
        <span className="plus">+</span>
      </div>
      <span className="destroy">X</span>
    </li>
  );
};

module.exports = Lishka;
