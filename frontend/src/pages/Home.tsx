import { FormEvent } from "react";
import Nav from "../components/Nav";
export default function Home() {
  const convert_types = [
    {
      name: 'length'
    },
    { name: 'weight' },
    { name: 'temperature' }
  ]

  type inputElement = HTMLInputElement | null
  interface Data {
    amount_to_convert: inputElement;
    unit_convert_from: inputElement;
    unit_convert_to: inputElement;
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('got the submit..')
    const amount_to_convert = document.getElementById('amount_to_convert')
    const unit_convert_from = document.getElementById('unit_convert_from')
    const unit_convert_to = document.getElementById('unit_convert_to')

    if (amount_to_convert && unit_convert_from && unit_convert_to) {
      try {
        console.log('trying...')

        const response = await fetch('http://localhost:8080/api', {
          method: 'POST',
          body: JSON.stringify({ hello: 'hello' })
        })
        console.log('reponse..')
        console.log(response)
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
            <input type="text" id="amount_to_convert">
            </input>
            <label htmlFor="unit_convert_from">
              Unit to convert from
            </label>
            <input type="text" id="unit_convert_from">
            </input>
            <label htmlFor="unit_convert_to">
              Unit to convert to
            </label>
            <input type="text" id="unit_convert_to">
            </input>
            <button className="p-2 bg-white rounded-md border border-2 active:text-blue-800" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div >
    </>)
}
