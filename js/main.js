var phone = document.querySelector(".tel");

phone.addEventListener("input", changeBackground);

function changeBackground() {
  if (phone.value !== "") {
    document.querySelector("button").style.background = "orange";
    document.querySelector("button").style.color = "white";
  }
}
