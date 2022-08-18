document.querySelectorAll(".socksList").forEach((el) => {
  el.addEventListener("click", async (e) => {
    // тут ищу счетчик в корзине
    const accumulator = document.querySelectorAll(".accumulator");
    // plus
    const plus = document.querySelectorAll(".plus");
    const minus = document.querySelectorAll(".minus");

    if (e.target.className === "plus") {
      let value =
        e.target.closest("li").childNodes[3].childNodes[1].textContent;
      value = "2";
    }

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
