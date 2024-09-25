const StarterValdity: ValidityObject = { amount: null, from: null, to: null }
const checkValidity = ({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity }) => {

  const tempValidity: ValidityObject = { ...StarterValdity }
  if (amount_to_convert.current?.value) {
    tempValidity.amount = 'valid'
  } else {
    tempValidity.amount = null
  }
  if (unit_convert_from.current?.value) {
    tempValidity.from = 'valid'
  } else {
    tempValidity.from = null
  }
  if (unit_convert_to.current?.value) {
    tempValidity.to = 'valid'
  } else {
    tempValidity.to = null
  }
  setValidity({ ...tempValidity })
}

export { checkValidity, StarterValdity }
