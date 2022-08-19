const React = require("react");

const Lishka = ({ el }) => {
  const picture = {
    src1: "котейка",
    src2: "бэтмен",
    src3: "хагги-ваги",
    src4: "монстер энержи",
    src5: "искусство",
    src6: "котейка девочка",
    src7: "радуга",
    src8: "цветочная поляна",
    src9: "ждун",
    src10: "зебра",
    src11: "древний бог",
    src12: "долматинец",
    src13: "кит",
    src14: "парень в маске",
    src15: "кораблик",
  };

  const colors = {
    navy: "темно-синего",
    green: "зеленоватого",
    yellow: "ярко-желтого",
    pink: "розового",
    gray: "сероватого",
    tomato: "томатного",
    yellowgreen: "салатного",
    violet: "фиолетового",
    teal: "изумрудного",
    royalblue: "лазурного",
  };

  return (
    <li data-id={el.id}>
      <div>
        Носки <b>{el.title}</b>,{" "}
        <b style={{ color: el.color }}>{colors[el.color]}</b> цвета, с картинкой{" "}
        <b>{picture[el.src]}</b>
      </div>
      <div className="controls">
        <div className="counter">
          <span data-id={el.id} className="minus">
            -
          </span>
          <span className="accumulator">{el.count}</span>
          <span data-id={el.id} className="plus">
            +
          </span>
        </div>
        <span className="destroy">X</span>
      </div>
    </li>
  );
};

module.exports = Lishka;
