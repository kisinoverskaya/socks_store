require("@babel/register");
const express = require("express");
const passUserFromSession = require("./middleware/passUserFromSession");
const chalk = require("chalk");
const morgan = require("morgan");
const indexRouter = require("./routes/indexRouter");
const ssr = require("./middleware/ssr");
const authRouter = require("./routes/authRouter");
const session = require("express-session");

const logoutRouter = require("./routes/logoutRouter");
const FileStore = require("session-file-store")(session);

const PORT = 3000;
const app = express();

const sessionConfig = {
  store: new FileStore(),
  name: "user_sid",
  secret: process.env.SESSION_SECRET ?? "test",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use(passUserFromSession);
app.use(ssr);
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routers
app.use("/", indexRouter);
app.use("/auth/", authRouter);
// app.use("/logout", logoutRouter);

app.listen(PORT, (req, res) => {
  console.log(chalk.bgCyan(` Server has been start on port: ${PORT} `));
});
