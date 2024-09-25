
import { FormEvent, ChangeEvent, KeyboardEvent, MouseEvent } from 'react'
declare global {
  interface ConversionObject {
    convertedResult: string;
    original: string;
  }
  interface ConversionData {
    amount_to_convert: number;
    unit_convert_to: string;
    unit_convert_from: string;
  }
  interface ResultData {
    data: ConversionData,
    conversionObject: ConversionObject
  }

  type FormEvent = FormEvent
  type ChangeEvent = ChangeEvent
  type KeyboardEvent = KeyboardEvent
  type MouseEvent = MouseEvent
  type validity = null | 'valid'
  interface ValidityObject {
    amount: validity;
    to: validity;
    from: validity
  }


}
