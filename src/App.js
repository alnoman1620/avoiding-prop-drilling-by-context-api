import logo from './logo.svg';
import './App.css';
import GrandFather from './Components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

export const RingContext = createContext('ring')

function App() {
  const [house, setHouse] = useState(2)
  const ornaments = 'gold ring'
  const book = 'tin goyenda'
  return (
    <RingContext.Provider value={book}>
      <div className="App">
      <button onClick={()=>setHouse(house + 1)}>Buy a new House</button>
      <GrandFather house={house} ornaments={ornaments}> </GrandFather>
    </div>
    </RingContext.Provider>
  );
}

export default App;
