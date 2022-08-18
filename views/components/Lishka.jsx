const React = require("react");

const Lishka = ({ el }) => {
  return (
    <li data-id={el.id}>
      {el.color} <span className="destroy">X</span>{" "}
    </li>
  );
};

module.exports = Lishka;
