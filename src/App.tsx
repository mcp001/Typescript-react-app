import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from "./components/List"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Akira Kurosawa",
      age: 80,
      url: 'https://24.media.tumblr.com/tumblr_m6s64sUdqG1qgpddwo1_1280.jpg',
      note: "Japan's greatest film director"
    }
  ])

  return (
    <div className="App">
      <h1>List of Directors</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
