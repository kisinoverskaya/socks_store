document.querySelectorAll(".socksList").forEach((el) => {
  el.addEventListener("click", async (e) => {
    if (e.target.className === "destroy") {
      const li = e.target.closest("li");
      const data = li.dataset.id;
      // const responce = await fetch("/cart/delete", {
      //   method: "delete",
      // });

      // const data = await responce.json();
    }
  });
});
