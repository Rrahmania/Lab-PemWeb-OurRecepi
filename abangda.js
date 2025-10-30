// Button untuk Login dan Regis
document.getElementById("showRegisterBtn").addEventListener("click", function () {
    const form = document.getElementById("Register");
    form.classList.toggle("hidden");
    form.scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("showLoginBtn").addEventListener("click", function () {
    const form = document.getElementById("Login");
    form.classList.toggle("hidden");
    form.scrollIntoView({ behavior: "smooth" });
  });

  // untuk menambah resep
document.addEventListener("DOMContentLoaded", function () {
  const addRecipeBtn = document.getElementById("btnNambah");
  const addRecipeForm = document.getElementById("nambahResep");

  addRecipeBtn.addEventListener("click", function () {
    addRecipeForm.classList.toggle("hidden");
    addRecipeForm.scrollIntoView({ behavior: "smooth" });
  });
});


