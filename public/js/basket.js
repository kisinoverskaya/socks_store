document.querySelectorAll(".socksList").forEach((el) => {
  el.addEventListener("click", async (e) => {
    if (e.target.className === "destroy") {
      const li = e.target.closest("li");
      const id = li.dataset.id;
      const responce = await fetch(`/cart/delete/${id}`, {
        method: "delete",
      });

      const data = await responce.json();
      console.log(id);
    }
  });
});
