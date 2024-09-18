import Nav from "../components/Nav";
export default function Home() {
  const convert_types = [
    {
      name: 'length'
    },
    { name: 'weight' },
    { name: 'temperature' }
  ]

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
            <input type="text" id="unit_to_convert">
            </input>
            <button className="p-2 bg-white rounded-md border border-2 active:text-blue-800" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div >
    </>)
}
