import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () =>{
    const expenses = [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	];
    return(
       <ul className="list-group">
          
              { expenses.map(expenses =>
                {
                    <ExpenseItem id={expenses.id} name={expenses.name} cost={expenses.cost}/>

                })}
           
       </ul>
    )

}
export default ExpenseList;