import './App.css';
import Board from './components/Board/Board';
import Display from './components/Display/Display'

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <h1>React TicTacToe</h1>
      </header>
      <section className='game-container'>
        <Board />
        <Display />
      </section>
    </section>
  );
}

export default App;
