import { useContext } from "react"
import { Context } from "../pages/Home"
const FromSelect = () => {
  const { ValidSpan, InValidSpan, UnitsComponent, fromValue, unit_convert_from, validity, units, unitTypes } = useContext(Context)


  return (
    <>
      <label htmlFor="unit_convert_from">
        Unit to convert from
      </label>

      <div className="flex flex-row justify-evenly space-x-2 items-center">
        <select className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" id="unit_convert_from" name="unit_convert_from" required value={fromValue
        } onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFromValue(e.target.value)} ref={unit_convert_from}>
          <UnitsComponent units={{ ...units }} unitTypes={{ ...unitTypes }} />

        </select>
        {
          validity.from ?
            <ValidSpan /> :
            <InValidSpan />
        }
      </div >
    </>)
}

export default FromSelect
