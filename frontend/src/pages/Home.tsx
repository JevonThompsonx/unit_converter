
import { useRef, useState, useCallback, createContext } from "react";
import { units, inactive_unit_types, default_unit_types } from '../vars';
import { ToSelect, FromSelect, UnitsComponent, AmountInput, ValidSpan, InValidSpan, SubmitButton, Nav } from "../components";
import { checkValidity, StarterValdity, handleSubmit } from "../utils";
import ConverterType from "../components/ConverterType";
// to dos : 
// [] set up a useEffect or useCallback as the validity checker 
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
  const [amountValue, setAmountValue] = useState('');

  const handleToValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity, validity });
    setToValue(e.target.value);
  };
  const handleFromValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity, validity });
    setFromValue(e.target.value);
  };

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
  }, [inactive_unit_types]);
  // form submit
  return (
    <Context.Provider value={{ ValidSpan, InValidSpan, UnitsComponent, fromValue, handleFromValue, checkValidity, unit_convert_from, unit_convert_to, validity, units, unitTypes, toValue, handleToValue, setValidity, handleSubmit, amount_to_convert, handleUnitType }}>
      <Nav />
      <div className="flex flex-col justify-evenly items-center w-screen h-screen p-2">
        <div id="converter_base" className="flex flex-col justify-evenly items-center border border-black border-2 p-6 space-y-6">
          <h1 className="text-3xl">Unit Converter</h1>
          <form action="/convert" className="flex flex-col space-y-2 p-2">
            <ConverterType />
            <AmountInput
            />
            <FromSelect />
            <ToSelect />
            <SubmitButton />
          </form>
        </div>
      </div>
    </Context.Provider>
  );
}

