//conversion type handling 
declare global {
  interface Unit_Types {
    'length': { active: boolean },
    'weight': { active: boolean },
    'temperature': { active: boolean }
  }
  interface Units {
    length: {
      'Millimeter': 'mm',
      'Centimeter': 'cm',
      'Meter': 'm',
      'Kilometer': 'km',
      'Inch': 'in',
      'Foot': 'ft',
      'Yard': 'yd',
      'Mile': 'mi'
    },
    weight: {
      'Grams': 'g',
      'Milligrams': 'mg',
      'Pounds': 'lb',
      'Ounce': 'oz',
      'Millograms': 'kg'
    },
    temperature: {
      'Celsius': 'C',
      'Fahrenheit': "F",
      'Kelvin': "K"
    }
  }
}
export { }
