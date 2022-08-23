import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Trainer from './Trainer';
import Converter from './Converter';

function App() {

  const header = <h1>It's reactin' time!</h1>;
  
  const HeadFunc = () => <h1>It's reactin' time!</h1>;
  return (
    <div className="App">
      {header}
      {HeadFunc()}
      <HeadFunc/>
      <main>
        <Trainer name={4494} age={28} specialism="Software"/>
        <Trainer name="Reece" age={25} specialism="Devops"/>
        <section>
          <Converter/>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
