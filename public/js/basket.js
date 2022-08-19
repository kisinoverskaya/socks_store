document.querySelectorAll(".socksList").forEach((el) => {
  el.addEventListener("click", async (e) => {
    // тут ищу счетчик в корзине
    const accumulator = document.querySelectorAll(".accumulator");
    // plus
    const plus = document.querySelectorAll(".plus");
    const minus = document.querySelectorAll(".minus");

    if (e.target.className === "destroy") {
      const li = e.target.closest("li");
      const id = li.dataset.id;
      li.remove();

      const span = document.querySelector(".price");

      const responce = await fetch(`/cart/delete/${id}`, {
        method: "delete",
      });

      const data = await responce.json();
      console.log(data);
    }

    if (e.target.className === "plus") {
      const li = e.target.closest("li");
      const id = li.dataset.id;
      const url = `/cart/${e.target.dataset.id}`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          count: Number(
            li.childNodes[1].childNodes[0].childNodes[1].textContent
          ),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data.message);
      li.childNodes[1].childNodes[0].childNodes[1].textContent = data.message;
    }

    if (e.target.className === "minus") {
      const li = e.target.closest("li");
      const id = li.dataset.id;
      const url = `/cart/${e.target.dataset.id}`;
      const response = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify({
          count: Number(
            li.childNodes[1].childNodes[0].childNodes[1].textContent
          ),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data.message);
      li.childNodes[1].childNodes[0].childNodes[1].textContent = data.message;
    }
  });
});

const btnBuy = document.querySelector(".btnBuy");
btnBuy.addEventListener("click", async () => {
  const modalPay = document.querySelector(".modal-pay");
  console.log(modalPay);
  modalPay.classList.toggle("visible-pay");

  const url = "mailto:vadimir29@gmail.com";

  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify({
      text: "привет",
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
});
