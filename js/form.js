console.log("cart logic loaded");

// 3) EVENT → DOM bruges KUN til input
document.addEventListener("click", (event) => {
  const btn = event.target.closest(".add-to-cart-btn");
  if (!btn) return;

  const card = btn.closest(".product-card");
  if (!card) return;

  const name = card.dataset.name || "Ukendt pizza";
  const price = Number(card.dataset.price) || 0;

  const cartState = addToCart(name, price);

  // VIS orderbutton HVIS total > 0
  if (cartState.total > 0) {
    document.getElementById("orderbutton").classList.add("order-visible");
    document.querySelector(".order-price").textContent =
      "DKK " + cartState.total;
  }

  // VIS ORDRE I POPUP (meget simpelt)
  document.getElementById("order_items").innerHTML = cartState.items
    .map(
      (item) =>
        `<li><span>${item.name}</span><span>DKK ${item.price}</span></li>`
    )
    .join("");
});

// 1) STATE (som vegetables-array)
const order = [];
let total = 0;

// 2) REN LOGIK
function addToCart(name, price) {
  order.push({ name, price });
  total += price;

  return {
    items: order,
    total: total,
  };
}

// 3) EVENT → DOM bruges KUN til input
document.addEventListener("click", (event) => {
  const btn = event.target.closest(".add-to-cart-btn");
  if (!btn) return;

  const card = btn.closest(".product-card");
  if (!card) return;

  const name = card.dataset.name || "Ukendt pizza";
  const price = Number(card.dataset.price) || 0;

  const cartState = addToCart(name, price);
});
