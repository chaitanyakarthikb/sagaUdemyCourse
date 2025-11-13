import './App.css';
import Card from './components/Card.jsx';
import Form from './components/Form.jsx';
import Header from './components/Header.jsx';
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
        <Header content={'Budget App'} type={'h1'}/>
        <Card el={{title:'Your Balance',price:'2550.53',style:'black'}} />
        <section className="cards">
          {cardData?.map((el) => {
            return <Card el={el} />;
          })}
        </section>
        <Header content={'History'} type={'h2'}/>
        <section className="historyItems">
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </section>
        <Header content={'Add a new Transaction'} type={'h2'}/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
