const React = require("react");
const Layout = require("../Layout");
const Lishka = require("./Lishka");
const Paymant = require("./Paymant");

module.exports = function CartList({ sockList, findUser }) {
  return (
    <Layout findUser={findUser}>
      <div className="basket">
        {/* тут модалка с оплатой */}
        <Paymant />
        <h1 className="userChange">{findUser.name}, вы выбрали:</h1>
        <div className="order-block">
          <ul className="socksList">
            {sockList.map((el) => (
              <Lishka el={el} />
            ))}
          </ul>
        </div>
        <div className="price-buy">
          <div className="total-price">
            <h2>
              Итого:
              <span className="price">
                {/* тут лишки */}
                {sockList.reduce((acc, el) => {
                  return acc + el.price * el.count;
                }, 0)}
              </span>
            </h2>
          </div>

          <div className="basket-controls">
            <button className="btnBuy">Перейти к оплате</button>
          </div>
        </div>
        <script defer src="/js/basket.js"></script>
      </div>
    </Layout>
  );
};
