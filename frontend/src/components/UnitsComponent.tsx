import { LenghtUnits, TemperatureUnits, WeightUnits } from "./childComponents"
function UnitSelector({ units, unitTypes }: { unitTypes: Unit_Types, units: Units }) {
  return (
    <>
      {unitTypes.length.active && <LenghtUnits units={{ ...units }} />}

      {unitTypes.weight.active && <WeightUnits units={{ ...units }} />}

      {unitTypes.temperature.active && <TemperatureUnits units={{ ...units }} />}
    </>
  );
}

export default UnitSelector
