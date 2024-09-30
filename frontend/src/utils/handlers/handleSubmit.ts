const handleSubmit = async ({ e, amount_to_convert, unit_convert_from, unit_convert_to }: SubmitHandlerProps) => {
  e.preventDefault();
  //console.log('Got the submit...');

  // Check if the values exist before parsing
  if (amount_to_convert.current?.value && unit_convert_from.current?.value && unit_convert_to.current?.value) {
    try {
      const data = {
        amount_to_convert: parseInt(amount_to_convert?.current?.value), // Use current.value directly
        unit_convert_from: unit_convert_from?.current?.value,
        unit_convert_to: unit_convert_to?.current?.value,
      };

      //console.log('Trying to send data...');

      // Fetch result
      const response = await fetch('https://unit-converter-backend.onrender.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(data), // No need for spread operator since data is already an object
      });

      //console.log('Response from backend:');
      return await response.json();
    } catch (error) {
      console.error('Error during fetch operation:', error);
    }
  } else {
    console.error('Error with given data: one or more values are missing.');
  }
};

export default handleSubmit;

