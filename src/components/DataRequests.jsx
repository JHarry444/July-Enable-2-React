import axios from 'axios';
import { useEffect, useState } from 'react';
import Cake from './Cake';

function DataRequests() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4494/cakes/getAllCakes')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []); // componentDidMount

  return (
    <>
      {
      data.map(({ name, amount, cost }) => (
        <Cake
          key={name + amount + cost}
          name={name}
          amount={amount}
          cost={cost}
        />
      ))
      }
    </>
  );
}

export default DataRequests;
