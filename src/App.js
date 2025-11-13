import './App.css';
import Card from './components/Card.jsx';
import HistoryItem from './components/HistoryItem.jsx';

function App() {
  const cardData = [
    {
      id: 1,
      title: "incoming",
      price: "1045.50",
      style: "green",
    },
    {
      id: 2,
      title: "expenses",
      price: "686.50",
      style: "red",
    },
  ];
  return (
    <div className="App">
      <div className="container">
        <h1>Budget App</h1>

        <div className="statistics">
          <h3>Your Balance:</h3>
          <p>2550.53</p>
        </div>

        <section className="cards">
          {cardData?.map((el) => {
            return <Card el={el} />;
          })}
        </section>

        <h2>History</h2>

        <section className="historyItems">
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </section>

        <h2>Add New Transaction</h2>
        <form>
          <div className='inputs'>
            <div className='form--col'>
              <label>Description</label>
              <input placeholder="Description" />
            </div>

            <div className='form--col'>
              <label>Value</label>
              <input type="number" />
            </div>
          </div>
          <div className='buttons'>
            <button>Cancel</button>
            <button>OK</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
