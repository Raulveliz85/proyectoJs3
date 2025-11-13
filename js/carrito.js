let cartContainer = document.getElementById("cart-section")

let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

function renderCarrito(cartItems) {
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
