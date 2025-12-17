// STATE (samme rolle som vegetables-array)
let total = 0;

// Tilføj en vare (samme princip som getAll + push)
function addToOrder(id, price) {
  order.push({ id, price });
  total += price;

  return getOrderSummary();
}

// Returnér opsummering (som dit summary-section)
function getOrderSummary() {
  return {
    items: [...order],
    total: total,
  };
}

// (valgfrit) nulstil ordre
function resetOrder() {
  order.length = 0;
  total = 0;
  return getOrderSummary();
}

// Eksportér funktioner (hvis du bruger modules)
// export { addToOrder, getOrderSummary, resetOrder };
