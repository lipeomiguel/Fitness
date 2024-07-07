const submitForm = document.querySelector("#form-get");

submitForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("submit");
});