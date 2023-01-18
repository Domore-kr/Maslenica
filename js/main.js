var phone = document.querySelector(".tel");

phone.addEventListener("input", changeBackground);

function changeBackground() {
  if (phone.value !== "" && phone.value.length > 11) {
    document.querySelector("button").style.background = "#f8bc33";
    document.querySelector("button").style["boxShadow"] = "5px 10px #e59d21";
    document.querySelector("button").style.color = "white";
  } else {
    document.querySelector("button").style.background = "#61c32c";
    document.querySelector("button").style["boxShadow"] = "5px 10px #48A316";
    document.querySelector("button").style.color = "#36840c";
  }
}
