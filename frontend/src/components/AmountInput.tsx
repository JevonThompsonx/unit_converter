import { useContext } from "react"
import { Context } from "../pages/Home"
const AmountInput = () => {
  const { amount_to_convert, ValidSpan, InValidSpan, validity, amount, setAmount } = useContext(Context)
  return (
    <>
      <label htmlFor="amount_to_convert">
        Amount to convert
      </label>
      <div className="flex flex-row justify-evenly space-x-2 items-center">
        <input type="number" id="amount_to_convert" name="amount_to_convert" className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" min={1} placeholder="Amount to convert" required ref={amount_to_convert} value={amount} onChange={(e) => setAmount(e.target.value)}>

        </input>
        {
          validity.amount ?
            <ValidSpan /> :
            <InValidSpan />
        }
      </div>
    </>
  )
}

export default AmountInput
