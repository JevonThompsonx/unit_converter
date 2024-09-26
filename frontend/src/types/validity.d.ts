declare global {
  type validity = null | 'valid';
  interface ValidityObject {
    amount: validity;
    to: validity;
    from: validity
  }
  interface CheckValidity {
    amount_to_convert: React.RefObject<HTMLInputElement>;
    unit_convert_from: React.RefObject<HTMLSelectElement>;
    unit_convert_to: React.RefObject<HTMLSelectElement>;
    validity: ValidityObject
    setValidity: React.Dispatch<React.SetStateAction<ValidityObject>>;
  }
}

export { }
