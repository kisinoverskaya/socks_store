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
    }

    if (e.target.classList.contains("heart")) {
      const reg = /\w\w\w\d/;
      let str = sockImg.style.backgroundImage;
      let str2 = str.match(reg)[0];
      console.log(str2);

      const response = await fetch("/favorites", {
        method: "post",
        body: JSON.stringify({
          title: sockTitle.value ? sockTitle.value : "Классические",
          color: sockImg.style.backgroundColor,
          src: str2,
          price: "500",
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
    }
  });
});

const delFav = document.querySelector(".gallery");
if (delFav) {
  delFav.addEventListener("click", async (event) => {
    if (event.target.classList.contains("del-heart")) {
      const di = event.target.parentNode;
      const id = di.dataset.id;
      const response = await fetch(`/favorites/${id}`, {
        method: "delete",
      });
      const data = await response.json();
      if (data.text === "Ok!") {
        const response = await fetch("/favorites/update");
        const html = await response.text();
        delFav.remove();
        document
          .getElementsByTagName("header")[0]
          .insertAdjacentHTML("afterend", html);

        console.log(data.text);
      } else {
        console.log(data.text);
      }
    }
  });
}
