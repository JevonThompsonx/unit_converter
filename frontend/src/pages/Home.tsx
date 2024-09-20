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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('got the submit..')
    const amount_to_convert = document.getElementById('amount_to_convert') as HTMLInputElement
    const unit_convert_from = document.getElementById('unit_convert_from') as HTMLInputElement
    const unit_convert_to = document.getElementById('unit_convert_to') as HTMLInputElement

    if (amount_to_convert && unit_convert_from && unit_convert_to) {
      try {
        const data = {
          amount_to_convert: parseInt(amount_to_convert.value),
          unit_convert_from: unit_convert_from.value,
          unit_convert_to: unit_convert_to.value
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
            <input type="text" id="amount_to_convert" className="p-2" min={1} placeholder="Amount to convert" required>
            </input>
            <label htmlFor="unit_convert_from">
              Unit to convert from
            </label>
            <select className="p-2" id="unit_convert_from" required>
              <option value="hi">hi</option>
              <option value="hello">hello</option>
              <option value="me">me</option>
            </select>
            <label htmlFor="unit_convert_from">
              Unit to convert to
            </label>
            <select className="p-2" id="unit_convert_to" required>
              <option value="hi">hi</option>
              <option value="hello">hello</option>
              <option value="me">me</option>
            </select>
            <button className="p-2 bg-white rounded-md border border-2 active:text-blue-800" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div >
    </>)
}
