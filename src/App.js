import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const EXPENSES_DATA=[
  {id:1,expenseTitle:'Medical Expense',expenseDate:new Date(2020,2,2),expenseAmount:'55.43'},
  {id:2,expenseTitle:'Car Insurance',expenseDate:new Date(2021,2,5),expenseAmount:'89.43'},
  {id:3,expenseTitle:'Electicity Bill',expenseDate:new Date(2020,1,3),expenseAmount:'45.43'},
]

const App=()=> {
  const[expenses,setExpenses] = useState(EXPENSES_DATA);
  const saveNewExpenseDatHandler = (newExpenseData)=>{
    console.log(newExpenseData);
    // setExpenses([newExpenseData,...expenses]);

    //To get the latest snapshot of previous state 
    setExpenses((prevExpense)=>{
      return ([
        newExpenseData,
        ...prevExpense
      ]);
    })
  }

  

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense saveNewExpenseData={saveNewExpenseDatHandler}/>
      <Expenses expenses={ expenses }/>
    </div>
  );
}

export default App;
