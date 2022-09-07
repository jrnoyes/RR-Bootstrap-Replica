import './App.css';
import Background from './components/Background'
import StoreListing from './compontents/StoreListing'
import TopBar from './components/TopBar'


function App() {


  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
