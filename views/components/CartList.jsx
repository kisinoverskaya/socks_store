const React = require("react");
const Layout = require("../Layout");
const Lishka = require("./Lishka");
const Main = require("./Main");

module.exports = function CartList({ sockList, findUser }) {
  return (
    <Layout>
      <div className="basket">
        <h1>{findUser.name} вы выбрали:</h1>
        <div className="order-block">
          <ul className="socksList">
            {sockList.map((el) => (
              <Lishka el={el} />
            ))}
          </ul>
        </div>
        <h2>
          Итого:{" "}
          <span className="price">
            {sockList.reduce((acc, el) => {
              return acc + el.price;
            }, 0)}
          </span>
        </h2>
        <script defer src="/js/basket.js"></script>
      </div>
    </Layout>
  );
};
