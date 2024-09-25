import { LenghtUnit, TemperatureUnits, WeightUnit } from "./childComponents"
export default function UnitSelector({ units, unitTypes }) {
  return (
    <>
      {unitTypes.length.active && <LenghtUnit units={{ ...units }} />}

      {unitTypes.weight.active && <WeightUnit units={{ ...units }} />}

      {unitTypes.temperature.active && <TemperatureUnits units={{ ...units }} />}
    </>
  );
}

