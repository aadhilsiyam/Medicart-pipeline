function calculateTotal(price, qty) {
  return price * qty;
}
function calculateDeliveryFee(orderTotal) {
  if (orderTotal >= 5000) {
    return 0
  } else {
    return 350;
  } 
} 
module.exports = { calculateTotal, calculateDeliveryFee };
