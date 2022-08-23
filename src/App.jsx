import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Trainer from './Trainer';
import Converter from './Converter';
import { useState } from 'react';

import trainers from "./trainers.json";

function App() {

  // const trainerComponents = [];

  // for (let trainer of trainers) {
  //   trainerComponents.push(<Trainer key={trainer.name + "-" + trainer.specialism} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>);
  // }
  
  return (
    <div className="App">
      <main>
        <section>
          <Converter/>
        </section>
        <section>
          <h2>Trainers</h2>
          {
          trainers.map(({name, age, specialism}) => 
            <Trainer key={name + "-" + specialism} name={name} age={age} specialism={specialism}/>)
          }
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
