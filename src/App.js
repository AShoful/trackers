import './App.css';
import Input from './Components/Input/Input';
import Tracker from './Components/Tracker/Tracker';

const TRACKERS = [
  { name: 'name',
    isStarted: false
  },
  { name: 'name',
    isStarted: false
  }
]

function App() {
  return (
    <div className="App">
      <p>tracker</p>
      <Input />
      {
        TRACKERS.map((item, i) => <Tracker key={i} name={item.name} isStarted={item.isStarted} />)
      }
    </div>
  );
}

export default App;
