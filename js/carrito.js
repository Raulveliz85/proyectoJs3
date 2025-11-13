let cartContainer = document.getElementById("cart-section")
 cartStorage = JSON.parse(localStorage.getItem("cartPrincipal")) || []
function renderCarrito(cartItems) {
  cartContainer.innerHTML = ""

  cartItems.forEach(producto => {
    const card = document.createElement("div")
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <h4>$${producto.precio}</h4>
    `
    cartContainer.appendChild(card)
  })
}

renderCarrito(cartStorage)
