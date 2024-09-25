
import React from 'react';

const SubmitButton: React.FC<SubmitButtonProps> = ({
  handleSubmit,
  amount_to_convert,
  unit_convert_to,
  unit_convert_from,
}) => {
  return (
    <>
      <button
        className="p-2 bg-white rounded-md border border-2 active:text-blue-800"
        onClick={(e) => {
          handleSubmit({
            e,
            amount_to_convert,
            unit_convert_to,
            unit_convert_from,
          });
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SubmitButton;

