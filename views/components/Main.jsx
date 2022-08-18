const React = require("react");
const Layout = require("../Layout");
const Login = require("./Login");
const Registration = require("./Registration");
const SocksGenerator = require("./SocksGenerator");

const Main = () => {
  return (
    <Layout>
      <SocksGenerator />
    </Layout>
  );
};

module.exports = Main;
