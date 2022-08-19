const React = require("react");
const Layout = require("../Layout");
const Login = require("./Login");
const Registration = require("./Registration");
const SocksGenerator = require("./SocksGenerator");

const Main = ({ findUser }) => {
  return (
    <Layout findUser={findUser}>
      {findUser ? (
        <SocksGenerator />
      ) : (
        <div className="needRegister">
          Для приобретения высококачественных носков вам необходимо
          зарегистрироваться
        </div>
      )}
    </Layout>
  );
};

module.exports = Main;
