import { useState } from 'react';
import Search from './Search';

import trainers from './data/trainers.json';
import Trainer from './Trainer';

function FilteredList() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search currentVal={search} setter={(e) => setSearch(e.target.value)} />
      {
      trainers
        .filter(({ name }) => name.toLowerCase().startsWith(search.toLowerCase()))
        .map(({ name, age, specialism }) => <Trainer key={`${name}-${specialism}`} name={name} age={age} specialism={specialism} />)
      }
    </>
  );
}

export default FilteredList;
