document.querySelectorAll(".wraper").forEach((el) => {
  el.addEventListener("click", async (e) => {
    const sockSrc = document.querySelector(".sock-uzor-src");
    const sockImg = document.querySelector(".sock-img");
    const srcItemBlock = document.querySelector(".src-item-block");
    const sockTitle = document.querySelector(".sock-title");
    if (e.target.className === "color-item") {
      sockImg.style.backgroundColor = e.target.dataset.color;
    }
    if (e.target.className === "src-item-block") {
      sockImg.style.backgroundImage = `url('../img/${e.target.dataset.src}.png')`;
      sockImg.style.backgroundImage = `url('../img/${e.target.dataset.src}.png')`;
      console.log(sockImg.style.backgroundImage);
    }

    if (e.target.className === "btn-buy") {
      console.log(sockSrc.dataset.src);
      console.log(srcItemBlock.dataset.src);

      const response = await fetch("/gen", {
        method: "post",
        body: JSON.stringify({
          title: sockTitle.value ? sockTitle.value : "Стандартный красный",
          color: sockImg.style.backgroundColor,
          src: "src1",
          price: "500",
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
    }
  });
});

// find modal
document.querySelectorAll(".register").forEach((el) => {
  el.addEventListener("click", (e) => {
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
  console.log("lox");
  if (myRes.message === "Создан новый чел") {
    window.location.href = "/";
  } else {
    console.log(myRes.message);
  }
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
