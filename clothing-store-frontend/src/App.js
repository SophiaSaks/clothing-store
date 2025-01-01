import './App.css'
import Frame from './components/Frame'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Frame />
      </div>
    </Router>
  );
}

export default App;
