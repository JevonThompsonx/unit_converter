//form result typing
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

  interface SubmitButtonProps {
    handleSubmit: (params: {
      e: React.MouseEvent<HTMLButtonElement>;
      amount_to_convert: React.RefObject<HTMLInputElement>;
      unit_convert_to: React.RefObject<HTMLSelectElement>;
      unit_convert_from: React.RefObject<HTMLSelectElement>;
    }) => Promise<void>
    amount_to_convert: React.RefObject<HTMLInputElement>;
    unit_convert_to: React.RefObject<HTMLSelectElement>;
    unit_convert_from: React.RefObject<HTMLSelectElement>;
  }

  interface SubmitHandlerProps {
    e: React.MouseEvent | React.KeyboardEvent;
    amount_to_convert: React.RefObject<HTMLInputElement>;
    unit_convert_from: React.RefObject<HTMLSelectElement>;
    unit_convert_to: React.RefObject<HTMLSelectElement>;
  }
}

export { }
