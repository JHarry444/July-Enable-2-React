import { useState } from 'react';

function Converter() {
  const [miles, setMiles] = useState(0);

  const [kms, setKms] = useState(0);

  const convertToKms = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setMiles(newValue);
    setKms(newValue * 1.6);
  };

  const mileId = 'mileInput';
  const kmId = 'kmInput';

  return (
    <>
      <label htmlFor={mileId}>
        Miles:
        <input type="number" id={mileId} value={miles} onChange={convertToKms} />
      </label>
      <br />
      <label htmlFor={kmId}>
        Kilometers
        <input
          type="number"
          id={kmId}
          value={kms}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            setKms(newValue);
            setMiles(newValue / 1.6);
          }}
        />
      </label>
    </>
  );
}

export default Converter;
