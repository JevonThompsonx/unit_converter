import { useContext } from "react"
import { Context } from "../pages/Home"
export default function ConverterType() {
  const { handleUnitType, unitTypes }: { handleUnitType: any, unitTypes: Unit_Types } = useContext(Context)
  return (
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
  )
}
