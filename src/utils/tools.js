const IndianRupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

export function formatINR(amount) {
  return IndianRupees.format(amount);
}
