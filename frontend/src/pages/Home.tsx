import { EventHandler, FormEvent, ReactEventHandler, useRef } from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import { ValidSpan, InValidSpan } from "../components/ValiditySpans";
import units from '../vars/units'
/* 
## Todo: 
[] Make the unit conversion types ['length', 'weight', 'temperature'] clickable so that the application state changes to display different units to convert from & to according to that state, start w/ default state of length
[] Add active selected conversion type signifier like a text & border color change
[x] Add key prop to unit conversion types 
[x] Add converter module to actually be able to convert given values
[] Make conversions work
[] Review & Error handling  
[] Ask chatgpt if there if there are any issues w/ the code
[] Final review 
[] Make it pretty 

## Planned units

Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.
Weight: milligram, gram, kilogram, ounce, pound.
Temperature: Celsius, Fahrenheit, Kelvin.

## Available units 

Temperature : C,F,K,R

Length: mm,cm,m,in,ft-us,ft,mi

Mass/weigt : mcg, mg,g,kg,oz,lb,mt,t

*/

export default function Home() {

  const amount_to_convert = useRef<HTMLInputElement>(null)
  const unit_convert_from = useRef<HTMLSelectElement>(null)
  const unit_convert_to = useRef<HTMLSelectElement>(null)
  type validity = null | 'valid'
  interface ValidityObject {
    amount: validity;
    to: validity;
    from: validity
  }
  const StarterValdity: ValidityObject = { amount: null, from: null, to: null }
  const [validity, setValidity] = useState<ValidityObject>({ ...StarterValdity })

  const checkValidity = () => {
    const tempValidity: ValidityObject = { ...StarterValdity }
    if (amount_to_convert.current?.value) {
      tempValidity.amount = 'valid'
    } else {
      tempValidity.amount = null
    }
    if (unit_convert_from.current?.value) {
      tempValidity.from = 'valid'
    } else {
      tempValidity.from = null
    }
    if (unit_convert_to.current?.value) {
      tempValidity.to = 'valid'
    } else {
      tempValidity.to = null
    }
    setValidity({ ...tempValidity })
  }
  type ConversionType = 'length' | 'weight' | 'temperature';


  interface Unit_Types {
    'length': { active: boolean },
    'weight': { active: boolean },
    'temperature': { active: boolean }
  }
  const default_unit_types = {
    'length': { active: true },
    'weight': { active: false },
    'temperature': { active: false }
  }
  const inactive_unit_types = {
    'length': { active: false },
    'weight': { active: false },
    'temperature': { active: false }
  }
  const [unit_types, setUnitTypes] = useState<Unit_Types>(default_unit_types)


  const handleUnitType = (e: React.KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target)
    const currentUnit = e.target
    switch (currentUnit.id) {
      case 'weight':
        setUnitTypes({ ...inactive_unit_types, weight: { active: true } })
        break;
      case 'length':
        setUnitTypes({ ...inactive_unit_types, length: { active: true } })
        break;
      case 'temperature':
        setUnitTypes({ ...inactive_unit_types, temperature: { active: true } })
        break;
      //to do : figure out how to use state to change which unit is colored on click
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('got the submit..')
    if (amount_to_convert.current?.value && unit_convert_from.current?.value && unit_convert_to.current?.value) {
      try {
        const data = {
          amount_to_convert: parseInt(amount_to_convert.current?.value),
          unit_convert_from: unit_convert_from.current?.value,
          unit_convert_to: unit_convert_to.current?.value
        }
        console.log('trying...')

        const response = await fetch('http://localhost:8080/api', {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({ ...data })
        })
        console.log('reponse from backend printing on frontend')
        console.log(await response.json())
      }

      catch (error) {
        console.log('Well one of these values must be wrong')
        console.log(error)
      }
    }
    else {
      console.log('Error w/ given data')
    }
  }
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center w-screen h-screen p-2">
        <div id="converter_base" className="flex flex-col justify-evenly items-center border border-black border-2 p-6 space-y-6">
          <h1 className="text-3xl">Unit Converter</h1>
          <div id="convert_type " className="flex flex-row justify-evenly items-center space-x-2">
            {Object.entries(unit_types).map((item) => {
              return <button key={item[0]} id={item[0]} className={`p-2 ${item[1].active ? 'border-blue-500' : 'border-black'} border-2 rounded`}
                onClick={handleUnitType}
              >{item[0]}</button>
            })}
          </div>
          <form action="/convert" className="flex flex-col space-y-2 p-2">
            <label htmlFor="amount_to_convert">
              Amount to convert
            </label>
            <div className="flex flex-row justify-evenly space-x-2 items-center">
              <input type="text" id="amount_to_convert" name="amount_to_convert" className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" min={1} placeholder="Amount to convert" required onChange={checkValidity} onBlur={checkValidity} ref={amount_to_convert}>

              </input>
              {
                validity.amount ?
                  <ValidSpan /> :
                  <InValidSpan />
              }
            </div>

            <label htmlFor="unit_convert_from">
              Unit to convert from
            </label>

            <div className="flex flex-row justify-evenly space-x-2 items-center">
              <select className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" id="unit_convert_from" name="unit_convert_from" required value={undefined} onBlur={checkValidity} onChange={checkValidity} ref={unit_convert_from}>
                <option value="" >--please choose an option--</option>
                <option value="hi">hi</option>
                <option value="hello">hello</option>
                <option value="me">me</option>
              </select>
              {
                validity.from ?
                  <ValidSpan /> :
                  <InValidSpan />
              }
            </div>
            <label htmlFor="unit_convert_from">
              Unit to convert to
            </label>

            <div className="flex flex-row justify-evenly space-x-2 items-center">
              <select className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" id="unit_convert_to" name="unit_convert_to" required value={undefined} onBlur={checkValidity} onChange={checkValidity} ref={unit_convert_to}>
                <option value="" >--please choose an option--</option>
                <option value="hi">hi</option>
                <option value="hello">hello</option>
                <option value="me">me</option>
              </select>
              {
                validity.to ?
                  <ValidSpan /> :
                  <InValidSpan />
              }
            </div>
            <button className="p-2 bg-white rounded-md border border-2 active:text-blue-800" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div >
    </>)
}
