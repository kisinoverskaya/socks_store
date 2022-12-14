const React = require("react");
const Footer = require("./components/Footer");
const Nav = require("./components/Nav");

const Layout = ({ findUser, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="/style/style.css" />
        <link rel="stylesheet" href="/style/SocksGenerator.css" />
        <script defer src="/js/index.js"></script>
        <script defer src="/js/favorite.js"></script>
      </head>
      <body>
        <Nav findUser={findUser} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

module.exports = Layout;
