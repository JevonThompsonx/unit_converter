export default ({ValidSpan, InValidSpan, UnitsComponent})=> {
  
  <>
    <label htmlFor="unit_convert_from">
              Unit to convert from
            </label>

            <div className="flex flex-row justify-evenly space-x-2 items-center">
              <select className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" id="unit_convert_from" name="unit_convert_from" required value={fromValue} onBlur={checkValidity} onChange={handleFromValue} ref={unit_convert_from}>
                <UnitsComponent />
              </select>
              {
                validity.from ?
                  <ValidSpan /> :
                  <InValidSpan />
              }
            </div>
            </> 
} 
