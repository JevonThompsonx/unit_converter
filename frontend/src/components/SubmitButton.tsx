
import { useContext } from 'react';
import { Context } from '../pages/Home';
const SubmitButton = () => {
  const { handleSubmit,
    amount_to_convert, unit_convert_from
    , unit_convert_to, setConversionAmount } = useContext(Context)
  return (
    <>
      <button
        className="p-2 bg-white rounded-md border border-2 active:text-blue-800"
        onClick={async (e) => {
          const submitResults = await handleSubmit({
            e,
            amount_to_convert,
            unit_convert_to,
            unit_convert_from,
          });
          setConversionAmount({ ...submitResults })
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SubmitButton;

