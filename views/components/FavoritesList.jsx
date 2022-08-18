const React  = require('react');
const Layout = require('../Layout');
const FavCard = require('./FavCard');

module.exports = function FavoritesList({ findUser, favArr}) {
  return (
    <Layout findUser={findUser}>
      {favArr.map((el) => <FavCard key={el.id} likedCard={el}/>)}
    </Layout>
  )
}