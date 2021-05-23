import React , {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const newExpenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.saveNewExpenseData(newExpenseData);
    }

    const editingHandler = () => {
        setIsEditing(true);
    }

    const cancelButtonHandler = () =>{
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm saveExpenseData={ saveExpenseDataHandler } onCancel = {cancelButtonHandler}/>}
        </div>
    )
}

export default NewExpense
