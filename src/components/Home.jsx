import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome Home!</h1>
      <button type="button" onClick={() => navigate('/data')}>Send me to the data</button>
    </>
  );
}
