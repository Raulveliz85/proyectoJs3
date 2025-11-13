const principal = [
  { id: 1, nombre: "Milanesa con guarnición", precio: 15000 },
  { id: 2, nombre: "Raviolones con estofado", precio: 16000 },
  { id: 3, nombre: "Ensalada super", precio: 8000 }
]

let cartPrincipal = []
let principalContainer = document.getElementById("principal-container")

function renderPrincipal(array) {
  array.forEach(plato => {
    const card = document.createElement("div")
    card.innerHTML = `
      <h3>${plato.nombre}</h3>
      <h4>$${plato.precio}</h4>
      <button class="principalAgregar" id="${plato.id}">Agregar</button>
    `
    principalContainer.appendChild(card)
  })
  agregarAlCarrito()
}

renderPrincipal(principal)

function agregarAlCarrito() {
  addButton = document.querySelectorAll(".principalAgregar")

  addButton.forEach(button => {
    button.onclick = (e) => {
      let principalId = e.currentTarget.id
      const selectedPrincipal = principal.find(principal => principal.id == principalId)

      cartPrincipal.push(selectedPrincipal)
      localStorage.setItem("cartPrincipal", JSON.stringify(cartPrincipal))

    }
  })
}
