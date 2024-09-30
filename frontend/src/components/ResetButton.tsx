import { useContext } from "react";
import { Context } from "../pages/Home";
import { checkValidity } from "../utils";


const ResetButton = () => {
  const { setConversionAmount, setToValue, setFromValue, amount_to_convert, unit_convert_from, unit_convert_to, setValidity, validity, setAmount } = useContext(Context)
  return (
    <>
      <button
        className="p-2 bg-white rounded-md border border-2 active:text-blue-800"
        onClick={() => {
          try {
            setToValue('')
            setFromValue('')
            setAmount('')
            checkValidity({ amount_to_convert, unit_convert_from, unit_convert_to, setValidity, validity });

          }
          catch { }
          setConversionAmount(null)
        }}
      >
        Reset
      </button >
    </>
  );
};

export default ResetButton;

