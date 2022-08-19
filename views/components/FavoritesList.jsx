const React = require("react");
const Layout = require("../Layout");
const FavCard = require("./FavCard");
const TrueList = require('./TrueList')

module.exports = function FavoritesList({ findUser, favArr }) {
  return (
    <Layout findUser={findUser}>
    <TrueList favArr={favArr}/> 
    </Layout>
  );
};
