function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Rudeus-light.jpg")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/Rudeus.jpg")
    localStorage.setItem("theme", "dark")
  }
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme")
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (savedTheme === "light") {
    html.classList.add("light")
    img.setAttribute("src", "./assets/Rudeus-light.jpg")
  }
}
