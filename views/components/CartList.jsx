const React = require("react");
const Layout = require("../Layout");
const Main = require("./Main");

module.exports = function CartList({ sockList, findUser }) {
  return (
    <Layout>
      <div className="basket">
        <h1>{findUser.name} вы выбрали:</h1>
        <div className="order-block">
          <ul className="socksList">
            {sockList.map((el) => (
              <li>
                {el.color} <span className="destroy">X</span>{" "}
              </li>
            ))}
          </ul>
        </div>
        <script defer src="/js/basket.js"></script>
      </div>
    </Layout>
  );
};
