import './App.css';
import CovidApp from './components/CovidApp';
//https://covid-api.mmediagroup.fr/v1/cases?country=Argentina
//https://www.countryflags.io/ar/flat/64.png

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <CovidApp></CovidApp>

      </header>
    </div>
  );
}

export default App;
