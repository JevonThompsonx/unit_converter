
import { useRef, useState, useCallback } from "react";
import Nav from "../components/Nav";
import { units, inactive_unit_types, default_unit_types } from '../vars';
import { ToSelect, FromSelect, UnitsComponent, AmountInput, ValidSpan, InValidSpan } from "../components";
import { checkValidity, StarterValdity } from "../utils";

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
    checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity });
    setToValue(e.target.value);
  };

  const handleFromValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity });
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
      // Ensure no state loop occurs
    }
  }, [inactive_unit_types]);

  // form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('got the submit..');
    if (amount_to_convert.current?.value && unit_convert_from.current?.value && unit_convert_to.current?.value) {
      try {
        const data = {
          amount_to_convert: parseInt(amount_to_convert.current?.value),
          unit_convert_from: unit_convert_from.current?.value,
          unit_convert_to: unit_convert_to.current?.value,
        };
        console.log('trying...');
        // fetch result
        const response = await fetch('http://localhost:8080/api', {
          method: 'POST',
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify({ ...data }),
        });
        console.log('response from backend printing on frontend');
        console.log(await response.json());
      } catch (error) {
        console.log('Well one of these values must be wrong');
        console.log(error);
      }
    } else {
      console.log('Error with given data');
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center w-screen h-screen p-2">
        <div id="converter_base" className="flex flex-col justify-evenly items-center border border-black border-2 p-6 space-y-6">
          <h1 className="text-3xl">Unit Converter</h1>
          <div id="convert_type" className="flex flex-row justify-evenly items-center space-x-2">
            {Object.entries(unitTypes).map((item) => (
              <button
                key={item[0]}
                id={item[0]}
                className={`p-2 ${item[1].active ? 'border-blue-500' : 'border-black'} border-2 rounded`}
                onClick={handleUnitType}
              >
                {item[0]}
              </button>
            ))}
          </div>
          <form action="/convert" className="flex flex-col space-y-2 p-2">
            <AmountInput
              amount_to_convert={amount_to_convert}
              checkValidity={() => checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity })} ValidSpan={ValidSpan}
              InValidSpan={InValidSpan}
              validity={{ ...validity }}
            />
            <FromSelect
              checkValidity={() => checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity })} ValidSpan={ValidSpan}
              InValidSpan={InValidSpan}
              validity={{ ...validity }}
              UnitsComponent={UnitsComponent}
              units={units}
              unitTypes={unitTypes}
              fromValue={fromValue}
              handleFromValue={handleFromValue}
              unit_convert_from={unit_convert_from}
            />
            <ToSelect
              checkValidity={() => checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity })} ValidSpan={ValidSpan}
              InValidSpan={InValidSpan}
              validity={{ ...validity }}
              UnitsComponent={UnitsComponent}
              units={units}
              unitTypes={unitTypes}
              toValue={toValue}
              handleToValue={handleToValue}
              unit_convert_to={unit_convert_to}
            />
            <button className="p-2 bg-white rounded-md border border-2 active:text-blue-800" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

