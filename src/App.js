import './styles.css';
import Header from './Components/Header';
import Meme from './Components/Meme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
          <Meme />
        </p>
      </header>
    </div>
  );
}

export default App;
