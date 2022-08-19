const React = require("react");

const Paymant = () => {
  return (
    <div className="modal-pay">
      <div className="destroyModal">X</div>
      <div className="cardinfo">
        <div className="card">
          <div className="line"></div>
        </div>
        <div className="card2">
          <h2 className="cardName">No name bank</h2>
          <h2 className="cardNum">0000 0000 0000 0000</h2>
        </div>
        <div className="btnBuyCard">
          <button className="btnBuy buybuy">Оплатить</button>
        </div>
      </div>
    </div>
  );
};

module.exports = Paymant;
