import { useParams } from 'react-router-dom';

function Params() {
  const { param } = useParams();
  return (
    <p>
      {`Parameter: ${param}`}
    </p>
  );
}

export default Params;
