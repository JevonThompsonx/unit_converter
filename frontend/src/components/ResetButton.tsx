import { useContext } from "react";
import { Context } from "../pages/Home";

const ResetButton = () => {
  const { setConversionAmount, amount_to_convert, unit_convert_from, unit_convert_to } = useContext(Context)
  const resetConversionAmount = () => setConversionAmount(null)
  return (
    <>
      <button
        className="p-2 bg-white rounded-md border border-2 active:text-blue-800"
        onClick={() => {

          resetConversionAmount
        }}
      >
        Reset
      </button >
    </>
  );
};

export default ResetButton;

