function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Rudeus-light.jpg")
    img.setAttribute(
      "alt",
      "Foto do personagem Rudeus Greyrat de Mushoku Tensei olhando para o horizonte."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Rudeus.jpg")
    img.setAttribute(
      "alt",
      "Foto do personagem Rudeus Greyrat de Mushoku Tensei sorrindo."
    )
  }
}
