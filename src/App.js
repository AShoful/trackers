import './App.css';
import Input from './Components/Input/Input';
import Tracker from './Components/Tracker/Tracker';
import { useSelector } from 'react-redux';

function App() {
  const trackers = useSelector((store) => store);

  return (
    <div className="App">
      <p>tracker</p>
      <Input />
      {!trackers.length
        ? 'Trackers list is empty'
        : trackers.map((tracker, i) => (
            <Tracker key={tracker.id} id={tracker.id} />
          ))}
    </div>
  );
}

export default App;
