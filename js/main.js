document.querySelectorAll(".menu-btn").forEach((btn) => {
  btn.addEventListener("click", () => btn.closest(".nav").classList.toggle("open"));
});

document.querySelectorAll("form[data-demo]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const toast = form.querySelector(".toast");
    if (toast) {
      toast.style.display = "block";
      toast.textContent = "Received. This demo form is for client review — it is not live yet.";
    }
    form.reset();
  });
});
