const wraper = document.querySelector(".wraper");

wraper.addEventListener("click", (e) => {
  const sockImg = document.querySelector(".sock-img");
  const sockImgSrc = document.querySelector(".sock-img-src");
  if (e.target.className === "color-item") {
    sockImg.style.backgroundColor = e.target.dataset.color;
  }
  if (e.target.className === "src-item-block") {
    sockImg.style.backgroundImage = `url('../img/${e.target.dataset.src}.png')`;
  }
  if (e.target.className === "btn-buy") {
    console.log("тут будет фетч");
    console.log(sockImg.dataset.src);
    const body = JSON.stringify({
      color: sockImg.style.backgroundColor,
    });
    console.log(body);
  }
});

// find modal
const register = document.querySelector(".register");
register.addEventListener("click", (e) => {
  e.preventDefault();
  const modal = document.querySelector(".registration");
  modal.classList.toggle("visible");
});

// find login
const logIn = document.querySelector(".logIn");
logIn.addEventListener("click", (e) => {
  e.preventDefault();
  const login = document.querySelector(".login");
  login.classList.toggle("visible");
});
// register

reg.addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = e.target.action;

  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.pass.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const myRes = await response.json();
  if (myRes.message === "Создан новый чел") {
    window.location.href = "/";
  } else {
  }
  // location.reload(); reload page // new url
});

// find login
login.addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = e.target.action;

  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify({
      email: e.target.email.value,
      pass: e.target.pass.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  e.target.email.value = "";
  e.target.pass.value = "";
  const login = document.querySelector(".login");
  login.classList.toggle("visible");

  const data = await response.json();
  location.reload();
});
