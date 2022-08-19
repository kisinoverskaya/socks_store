const React = require("react");

const SocksGenerator = () => {
  return (
    <div className="wraper" id="wrap">
      <div className="heart heart-del"></div>
      <input
        type="text"
        className="sock-title"
        placeholder="Придумайте название носку"
      />
      <div className="sock">
        <div className="sock-img">
          <div className="sock-img-src"></div>
          <div className="sock-uzor-src"></div>
        </div>
      </div>

      <div className="wrapper-desscription">
        <div className="wrapper-description-colors">
          <span data-color="navy" className="color-item"></span>
          <span data-color="green" className="color-item"></span>
          <span data-color="yellow" className="color-item"></span>
          <span data-color="pink" className="color-item"></span>
          <span data-color="gray" className="color-item"></span>
          <span data-color="tomato" className="color-item"></span>
          <span data-color="yellowgreen" className="color-item"></span>
          <span data-color="violet" className="color-item"></span>
          <span data-color="teal" className="color-item"></span>
          <span data-color="royalblue" className="color-item"></span>
        </div>
        <div className="wrapper-description-src">
          <span data-src="src1" className="src-item-block"></span>
          <span data-src="src2" className="src-item-block"></span>
          <span data-src="src3" className="src-item-block"></span>
          <span data-src="src4" className="src-item-block"></span>
          <span data-src="src5" className="src-item-block"></span>
          <span data-src="src6" className="src-item-block"></span>
          <span data-src="src7" className="src-item-block"></span>
          <span data-src="src8" className="src-item-block"></span>
          <span data-src="src9" className="src-item-block"></span>
          <span data-src="src10" className="src-item-block"></span>
          <span data-src="src11" className="src-item-block"></span>
          <span data-src="src12" className="src-item-block"></span>
          <span data-src="src13" className="src-item-block"></span>
          <span data-src="src14" className="src-item-block"></span>
          <span data-src="src15" className="src-item-block"></span>
        </div>
        <div className="wrapper-uzor-description"></div>
      </div>
      <div className="sock-price">500 ₽</div>
      <button className="btn-buy">Купить</button>
    </div>
  );
};

module.exports = SocksGenerator;
