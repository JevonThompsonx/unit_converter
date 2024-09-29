
import { useRef, useState, useCallback, createContext, useEffect } from "react";
import { units, inactive_unit_types, default_unit_types } from '../vars';
import { UnitsComponent, ValidSpan, InValidSpan, Nav, Converter, Result } from "../components";
import { checkValidity, StarterValdity, handleSubmit } from "../utils";
// to dos : 
// [setup validity checker to trigger when toValue & FromValue are changed to prevent having to pass it to literally everything]
export const Context = createContext<any>(null)
export default function Home() {
  // define refs for usage 
  const amount_to_convert = useRef<HTMLInputElement>(null);
  const unit_convert_from = useRef<HTMLSelectElement>(null);
  const unit_convert_to = useRef<HTMLSelectElement>(null);

  // starter validity object
  const [validity, setValidity] = useState<ValidityObject>({ ...StarterValdity });

  // to & from value state
  const [toValue, setToValue] = useState('');
  const [fromValue, setFromValue] = useState('');
  const [conversionAmount, setConversionAmount] = useState<ConversionResult>()
  

  const [unitTypes, setUnitTypes] = useState<Unit_Types>({ ...default_unit_types });

  // Memoize handleUnitType
  const handleUnitType = useCallback((e: React.KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
    switch ((e.target as HTMLButtonElement).id) {
      case 'weight':
        setUnitTypes({ ...inactive_unit_types, 'weight': { active: true } });
        break;
      case 'length':
        setUnitTypes({ ...inactive_unit_types, 'length': { active: true } });
        break;
      case 'temperature':
        setUnitTypes({ ...inactive_unit_types, 'temperature': { active: true } });
        break;
    }
    setToValue('')
    setFromValue('')

  }, [inactive_unit_types]);
  useEffect(() => {
    checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity, validity });
  }, [toValue, fromValue])
  // form submit
  return (
    <Context.Provider value={{ ValidSpan, InValidSpan, UnitsComponent, fromValue, unit_convert_from, unit_convert_to, validity, units, unitTypes, toValue, setValidity, handleSubmit, amount_to_convert, handleUnitType, setConversionAmount, conversionAmount, setToValue, setFromValue }}>
      <Nav />

      <div className="flex flex-col justify-evenly items-center w-screen h-screen p-2">
        {conversionAmount ?
          <Result /> :
          <Converter />}
      </div>
    </Context.Provider>
  );
}

