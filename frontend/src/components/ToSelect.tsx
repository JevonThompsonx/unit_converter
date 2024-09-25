export default ({ValidSpan, InValidSpan, UnitsComponent, toValue,handleToValue, checkValidity, unit_convert_to )=> {
return(
<>
  <label htmlFor="unit_convert_to">
              Unit to convert to
            </label>

            <div className="flex flex-row justify-evenly space-x-2 items-center">
              <select className="p-2 invalid:text-red-500 focus:border-blue-500 valid:text-green-600" id="unit_convert_to" name="unit_convert_to" required value={toValue} onBlur={checkValidity} onChange={handleToValue} ref={unit_convert_to}>
                <UnitsComponent units={{...units}} unitTypes={{unitTypes}} />
              </select>
              {
                validity.to ?
                  <ValidSpan /> :
                  <InValidSpan />
              }
            </div>
</>
  
)

  
}
