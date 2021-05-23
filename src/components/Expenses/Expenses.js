import React , {useState} from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart'

const Expenses=(props)=>{
    const[filteredYear,setFilteredYear] = useState('2020');

    

    const SaveExpenseFilterHandler =(selectedFilter)=>{
            setFilteredYear(selectedFilter);
    }
    const filteredExpense = props.expenses.filter((expense)=>{
        return expense.expenseDate.getFullYear().toString() === filteredYear;
    });


    
    
    return(
        <div className="expenses">
            <ExpensesFilter selected={ filteredYear } saveExpenseFilter={ SaveExpenseFilterHandler }/>
            <ExpensesChart expenses={ filteredExpense }/>
            <ExpensesList items={filteredExpense}/>
       </div>
    );
}

export default Expenses;