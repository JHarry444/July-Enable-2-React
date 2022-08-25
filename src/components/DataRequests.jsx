import axios from 'axios';
import { useEffect, useState } from 'react';
import Cake from './Cake';

function DataRequests() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4494/cakes/findCakes?name=${search}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [search]); // componentDidMount + new value for search

  return (
    <>
      <label htmlFor="cakeSearch">
        Name:
        <br />
        <input type="text" id="cakeSearch" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
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
