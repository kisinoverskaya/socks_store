const React = require("react");
const FavCard = require("./FavCard");

module.exports = function TrueList({favArr }) {
  return (
    
      <div className="gallery">
        {favArr.map((el) => (
          <FavCard key={el.id} likedCard={el} />
        ))}
      </div>

  );
};