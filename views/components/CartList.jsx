const React = require("react");
const Layout = require("../Layout");
const Main = require("./Main");

module.exports = function CartList({ findUser }) {
  return (
    <Layout>
      <div className="basket">
        <h1>{findUser.name} вы выбрали:</h1>
        <div className="order-block">
          <div className="left-block"></div>
          <div className="right-block"></div>
        </div>
      </div>
    </Layout>
  );
};
