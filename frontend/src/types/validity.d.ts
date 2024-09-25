type validity = null | 'valid'
interface ValidityObject {
  amount: validity;
  to: validity;
  from: validity
}

export { validity, ValidityObject }
