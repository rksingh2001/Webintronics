const scooters = document.getElementsByClassName("scooters")
scooters[0].addEventListener(
  "mouseover", () => {
    console.log("fefe")
    document.getElementById("bikes-submenu").style = "display: flex";
  }
)

document.getElementById("bikes-submenu").addEventListener(
  "mouseout", () => {
    console.log("fefe")
    document.getElementById("bikes-submenu").style = "display: none";
  }
)