const WeightUnits = ({ units }) => {
  return (
    <>
      <option value="">--please choose an option--</option>
      {Object.entries(units.weight).map((item) => (
        <option value={item[1]} key={item[0]}>
          {item[0]}
        </option>
      ))}
    </>
  )
}
export default WeightUnits
