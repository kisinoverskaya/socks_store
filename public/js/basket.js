document.querySelectorAll(".socksList").forEach((el) => {
  el.addEventListener("click", async (e) => {
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

// const btnBuy = document.querySelectorAll(".btnBuy").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     const modalPay = document.querySelector(".modal-pay");
//     console.log(modalPay);
//     modalPay.classList.toggle("visible");
//   });
// });

const btnBuy = document.querySelector(".btnBuy");
btnBuy.addEventListener("click", () => {
  const modalPay = document.querySelector(".modal-pay");
  console.log(modalPay);
  modalPay.classList.toggle("visible-pay");
});
