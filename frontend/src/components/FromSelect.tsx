import { useContext } from "react"
import { Context } from "../pages/Home"
const FromSelect = () => {
  const { ValidSpan, InValidSpan, UnitsComponent, fromValue, handleFromValue, checkValidity, unit_convert_from, validity, units, unitTypes, amount_to_convert, setValidity, unit_convert_to } = useContext(Context)


  return (
    <>
      <label htmlFor="unit_convert_from">
        Unit to convert from
      </label>

      <div className="flex flex-row justify-evenly space-x-2 items-center">
        <select className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" id="unit_convert_from" name="unit_convert_from" required value={fromValue} onBlur={
          () => checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity, validity })
        } onChange={handleFromValue} ref={unit_convert_from}>
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
