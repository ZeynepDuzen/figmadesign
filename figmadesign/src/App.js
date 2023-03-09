import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  console.log("data 0 ", data[1]);

  const cards = data.map(cardData => {
    return (
      <Card data={cardData} />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
