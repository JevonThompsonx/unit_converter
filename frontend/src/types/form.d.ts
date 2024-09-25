//form result typing 
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

