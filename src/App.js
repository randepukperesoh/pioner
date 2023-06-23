import './App.css';
import Header from './components/Header/Header'
import Foother from './components/Foother/Fother';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Map from './components/Map/Map';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Products/>
      <Map/>
      <News/>
      <Foother/>
    </div>
  );
}

export default App;
