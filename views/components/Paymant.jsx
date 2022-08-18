const React = require("react");

const Paymant = () => {
  return (
    <div className="modal-pay">
      <h2>Оплата товара</h2>
      <div className="cardinfo"></div>
      <div className="email"></div>
      <button>Оплатить</button>
    </div>
  );
};

module.exports = Paymant;
