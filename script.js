function toggleMode() {
  const html = document.documentElement
  //Seta o html na variavel constante "html"
  /*
  //Se; o HTML; Contém dentro da lista de classes uma classe chamada "Light"
  if (html.classList.contains("light")) {
    //Se tiver, eu a removo
    html.classList.remove("light")
  } else {
    //Se não tiver, eu crio ela
    html.classList.add("light")
  }
  */
  html.classList.toggle("light")
  //O toggle faz com que, se não existir uma classe "light" ele crie uma
  //Caso contrario ele a remove

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //Subtituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/img-light.jpg")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/img-dark.jpeg")
  }
}
