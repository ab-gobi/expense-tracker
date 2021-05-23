import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


const ExpenseItem=(props)=>{
    return(
        <li>
        <div className="expense-item">
            <div>
                <ExpenseDate expenseDate={ props.expenseDate }/>
            </div>
            <div className="expense-item__description">
            <h2>{ props.expenseTitle }</h2>
            <div className="expense-item__price">${ props.expenseAmount }</div>
            </div>
        </div>
        </li>

    );
}

export default ExpenseItem;