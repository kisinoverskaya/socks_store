const React = require("react");

module.exports = function FavCard({ likedCard }) {
  return (
    // <div className="findArr">
    //   <div className="sock sock2">
    //     <div className="sock-img">
    //       <img src="#" alt="Фото носка" />
    //       <div className="sock-img-src">{likedCard.color}</div>
    //       <div className="sock-uzor-src">{likedCard.title}</div>
    //       <div>{likedCard.src}</div>
    //     </div>
    //   </div>
    // </div>
    <div className="wraper">
      <div className="heart"></div>
      <input
        type="text"
        className="sock-title"
        placeholder="Придумайте название носку"
      />
      <div className="sock">
        <div className="sock-img">
          <div className="sock-img-src">{likedCard.color}</div>
          <div className="sock-uzor-src"></div>
        </div>
      </div>
      <button className="btn-buy">Купить</button>
    </div>
  );
};
