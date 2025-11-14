import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Form from './components/Form.jsx';
import Header from './components/Header.jsx';
import HistoryItems from './components/HistoryItems.jsx';
import Cards from './components/Cards.jsx';
import Modal from './components/Modal.jsx';

function App() {
  

  const initialEntries = [
    {
      id: 1,
      description: "This is my First entry",
      isExpense: true,
      value: 1234,
    },
    {
      id: 2,
      description: "This is my Second entry",
      isExpense: true,
      value: 665,
    },
    {
      id: 3,
      description: "This is my Third entry",
      isExpense: false,
      value: 872.9,
    },
    {
      id: 4,
      description: "This is my Fourth entry",
      isExpense: false,
      value: 982,
    },
    {
      id: 5,
      description: "This is my Sixth entry",
      isExpense: true,
      value: 237.8,
    },
    {
      id: 6,
      description: "This is my Seventh entry",
      isExpense: false,
      value: 789.63,
    },
  ];

  const [items,setItems] = useState(initialEntries);
  const [showModal,setShowModal] = useState(false);
  const [idForModalToShow,setIdForModalToShow] = useState(null);
  const [totalPrice,setTotalPrice] = useState(0);
  const [income,setIncome] = useState(0);
  const [expenses,setExpenses] = useState(0);

  const cardData = [
    {
      id: 1,
      title: "income",
      price: income,
      style: "green",
    },
    {
      id: 2,
      title: "expenses",
      price: expenses,
      style: "red",
    },
  ];

  
  const handleDeleteItem = (id)=>{
    setItems(()=>{
      return items.filter((el)=>el.id!==id);
    })
  }

  const addItem = (item)=>{
    setItems((prev)=>[...prev,item])
  }

  const element = items.find((el)=>el.id === idForModalToShow);

  const editEntries = (el)=>{
    console.log("hello world , I am inside my editEntries function")
    let temp = items.map((entry)=>{
      if(entry.id === el.id ){
        entry.description=el.description;
        entry.isExpense=el.isExpense;
        entry.value = el.value;
        return entry;
      }
      return entry;
    })
    setItems(temp)
    setShowModal(false);
    
  }
  useEffect(()=>{
    if(items.length ===0){
      setExpenses(0);
      setIncome(0);
      setTotalPrice(0);
      return;
    }
    let totalAmount = 0;
    let totalIncome = 0;
    let totalExpenses = 0;
    
    items.forEach((el)=>{
      if(el.isExpense){
        totalExpenses = totalExpenses + el.value;
      }else{
        totalIncome = totalIncome + el.value;
      }

      setExpenses(totalExpenses);
      setIncome(totalIncome);
      totalAmount = totalIncome - totalExpenses;
      setTotalPrice(totalAmount);
    })
    
  },[items])

  
  return (
    <div className="App">
      <div className="container">
        <Header content={'Budget App'} type={'h1'}/>
        <Card el={{title:'Your Balance',price:totalPrice,style:'black'}} />
        <Cards cardData={cardData}/>
        <Header content={'History'} type={'h2'}/>
        <HistoryItems setIdForModalToShow={setIdForModalToShow}  setShowModal={setShowModal} handleDeleteItem={handleDeleteItem} items={items}/>
        {showModal && <Modal editEntries={editEntries} element={element}  setShowModal={setShowModal}/>}
        <Header content={'Add a new Transaction'} type={'h2'}/>
        <Form  addItem={addItem}/>
      </div>
    </div>
  );
}

export default App;
