const React = require("react");

module.exports = function FavCard({ likedCard }) {
  return (
    <div className="wraper wrapper-favorite">
      <div className="heart"></div>
      <h3>{likedCard.title}</h3>
      <div className="sock">
        <div className="sock-img">
          <div
            className="sock-img-src"
            style={{
              background: likedCard.color,
              backgroundImage: `url('../img/${likedCard.src}.png')`,
            }}
          ></div>
          <div className="sock-uzor-src"></div>
        </div>
      </div>
      <button className="btn-buy">Купить</button>
    </div>
  );
};
