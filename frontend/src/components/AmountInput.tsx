
export default ({ amount_to_convert, ValidSpan, InValidSpan, checkValidity, validity }) => {
  return (
    <>
      <label htmlFor="amount_to_convert">
        Amount to convert
      </label>
      <div className="flex flex-row justify-evenly space-x-2 items-center">
        <input type="number" id="amount_to_convert" name="amount_to_convert" className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" min={1} placeholder="Amount to convert" required onChange={checkValidity} onBlur={checkValidity} ref={amount_to_convert} >

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
