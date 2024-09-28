import FromSelect from "./FromSelect"
import ToSelect from "./ToSelect"
import SubmitButton from "./SubmitButton"
import AmountInput from "./AmountInput"
import ConverterType from "./ConverterType"
export default function Converter() {

  return (
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
  )
}
