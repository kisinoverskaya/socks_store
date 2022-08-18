const React = require("react");
const Layout = require("../Layout");
const Login = require("./Login");
const Registration = require("./Registration");
const SocksGenerator = require("./SocksGenerator");

const Main = ({ findUser }) => {
  return (
    <Layout findUser={findUser}>
      <SocksGenerator />
    </Layout>
  );
};

module.exports = Main;
