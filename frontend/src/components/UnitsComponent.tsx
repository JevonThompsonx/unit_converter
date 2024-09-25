
export default function UnitSelector({ units, unitTypes }) {
  return (
    <>
      {unitTypes.length.active && (
        <>
          <option value="">--please choose an option--</option>
          {Object.entries(units.length).map((item) => (
            <option value={item[1]} key={item[0]}>
              {item[0]}
            </option>
          ))}
        </>
      )}

      {unitTypes.weight.active && (
        <>
          <option value="">--please choose an option--</option>
          {Object.entries(units.weight).map((item) => (
            <option value={item[1]} key={item[0]}>
              {item[0]}
            </option>
          ))}
        </>
      )}

      {unitTypes.temperature.active && (
        <>
          <option value="">--please choose an option--</option>
          {Object.entries(units.temperature).map((item) => (
            <option value={item[1]} key={item[0]}>
              {item[0]}
            </option>
          ))}
        </>
      )}
    </>
  );
}

