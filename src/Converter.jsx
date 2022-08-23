import { useState } from "react";

const Converter = () => {

    const [miles, setMiles] = useState(0);

    const [kms, setKms] = useState(0);

    const convertToKms = (e) => {
        const newValue = parseInt(e.target.value);
        setMiles(newValue);
        setKms(newValue * 1.6);
    }

    return (
        <>
            <label htmlFor="mileInput">Miles:</label>
            <input type="number" id="mileInput" value={miles} onChange={convertToKms}/>
            <br />
            <label htmlFor="kmInput">Kilometers</label>
            <input type="number" id="kmInput" value={kms} onChange={e => {
                        const newValue = parseInt(e.target.value);
                        setKms(newValue);
                        setMiles(newValue / 1.6);
            }} />
        </>
    )
}

export default Converter;