const React = require('react');

module.exports = function FavCard( { likedCard }) {
  return (
    <div className="sock">
    <div className="sock-img">
      <img src="#" alt="Фото носка" />
      <div className="sock-img-src">{likedCard.color}</div>
      <div className="sock-uzor-src">{likedCard.title}</div>
      <div>{likedCard.src}</div>
    </div>
  </div>
  )
}