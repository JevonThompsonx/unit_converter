const StarterValdity: ValidityObject = { amount: null, from: null, to: null }
const checkValidity = ({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity, validity }: CheckValidity) => {

  const updatedValidity: ValidityObject = { ...validity }
  if (amount_to_convert?.current?.value) {
    updatedValidity.amount = 'valid'
  } else {
    updatedValidity.amount = null
  }
  if (unit_convert_from?.current?.value) {
    updatedValidity.from = 'valid'
  } else {
    updatedValidity.from = null
  }
  if (unit_convert_to?.current?.value) {
    updatedValidity.to = 'valid'
  } else {
    updatedValidity.to = null
  }
  setValidity({ ...updatedValidity })
}
export { checkValidity, StarterValdity }
