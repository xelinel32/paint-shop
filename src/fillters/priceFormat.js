export default function priceFormat(value) {
  value = parseFloat(value)
  return value.toFixed(2) + ' USD'
}
