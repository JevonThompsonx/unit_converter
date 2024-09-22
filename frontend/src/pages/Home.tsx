import { FormEvent, useRef } from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import { ValidSpan, InValidSpan } from "../components/ValiditySpans";
export default function Home() {
  const convert_types = [
    {
      name: 'length'
    },
    { name: 'weight' },
    { name: 'temperature' }
  ]
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
  }
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center w-screen h-screen p-2">
        <div id="converter_base" className="flex flex-col justify-evenly items-center border border-black border-2 p-6 space-y-6">
          <h1 className="text-3xl">Unit Converter</h1>
          <div id="convert_type " className="flex flex-row justify-evenly items-center space-x-2">
            {convert_types.map((item) => {
              return <div><p>{item.name}</p>
              </div>
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
