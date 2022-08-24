import { useEffect, useState } from 'react';

function Hooks() {
  const [val, setVal] = useState('');

  useEffect(() => {
    console.log('Component did mount');
    // console.log('Component did update');

    setTimeout(() => setVal('time'), 1_000);

    return () => console.log('component did unmount');
  }, []);

  return (
    <>
      <h1>YO!</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
    </>
  );
}

export default Hooks;
