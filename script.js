function showAlert() {
  alert("some string");
}

let button = document.querySelector(".discord-button");

button.addEventListener("click", function() {
    showAlert();
});