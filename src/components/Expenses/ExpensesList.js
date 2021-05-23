import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem.js';

const ExpensesList=(props)=> {


   if(props.items.length===0){
       return <h2 className="expenses-list__fallback">No Expenses Found</h2>
   }

    return (
        <ul className="expenses-list">
            { props.items.map((obj)=>(
                <ExpenseItem 
                key={obj.id}
                expenseTitle={obj.expenseTitle} 
                expenseDate={obj.expenseDate} 
                expenseAmount={obj.expenseAmount}/> ))}
        </ul>
    )
}

export default ExpensesList
