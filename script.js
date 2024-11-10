function toogleMode() {
   const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

// substituir a imagem
   if (html.classList.contains("light")) {
  // se estiver light mode, adicionar a imagem light
    img.setAttribute("src",".Assets/avatar-light.png")
   } else {
    // se estiver sem light mode, manter o padrão
    img.setAttribute("src", "./Assets/avatar.png")
   }

  
}
