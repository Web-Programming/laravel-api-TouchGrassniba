import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello nama="Valentino" pesan="mantap"/>
        <Hello/>
        <Product/>
        <Registrasi/>
      </header>
    </div>
  );
}

export default App;
