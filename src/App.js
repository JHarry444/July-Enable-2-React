import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

function App() {

  const header = <h1>It's reactin' time!</h1>;
  
  const headFunc = () => <h1>It's reactin' time!</h1>;
  return (
    <div className="App">
      {header}
      {headFunc()}
      <main>
        Content goes there
      </main>
      <Footer/>
    </div>
  );
}

export default App;
