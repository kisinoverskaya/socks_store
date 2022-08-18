const React = require("react");

const Lishka = ({ el }) => {
  const obj = {
    src1: "котейка",
    src2: "бэтмен",
    src3: "хагги-ваги",
    src4: "монстер энержи",
    src5: "D&G",
    src6: "котейка девочка",
    src7: "радуга",
    src8: "цветочная поляна",
    src9: "вьюга",
    src10: "деньгопад",
  };

  return (
    <li data-id={el.id}>
      <div>
        <b>{el.title}</b>, цвет{" "}
        <b>
          {el.color}, с картинкой {obj[el.src]}
        </b>
      </div>
      <div className="controls">
        <div className="counter">
          <span className="minus">-</span>
          <spam className="accumulator">1</spam>
          <span className="plus">+</span>
        </div>
        <span className="destroy">X</span>
      </div>
    </li>
  );
};

module.exports = Lishka;
