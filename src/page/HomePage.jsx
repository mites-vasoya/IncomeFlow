import React, {useEffect, useState} from 'react';
import "./HomePage.css"
import {SpeedDial} from "primereact/speeddial";
import {Tooltip} from "primereact/tooltip";
import AddIncome from "../component/AddIncome";

const HomePage = () => {

    const [openAddIncome, setOpenAddIncome] = useState(false)
    const [openAddExpense, setOpenAddExpense] = useState(false)


    const buttonStyle = {backgroundColor: "#0f2a4b", border: "1px solid #0f2a4b"}

    const handleIncomeBtn = () => {
        setOpenAddIncome(!openAddIncome)
    }

    const handleExpenseBtn = () => {
        setOpenAddExpense(!openAddExpense)
    }

    const items = [{
        label: 'Add Expense', icon: 'pi pi-minus', command: () => handleExpenseBtn()
    }, {
        label: 'Add Income', icon: 'pi pi-plus', command: () => handleIncomeBtn()
    },];

    const expenseValues = [{
        title: "Cash - 1", value: 50000,
    }, {
        title: "Cash - 2", value: 10500,
    }, {
        title: "Cash - 3", value: 10080,
    }, {
        title: "Cash - 4", value: 80000,
    }, {
        title: "Cash - 5", value: 10800,
    }]

    useEffect(() => {
        console.log("Income : ", openAddIncome)
        console.log("Expense  : ", openAddExpense)
    }, [openAddIncome, openAddExpense])

    return (<div className="homepage">
        <div className="current-balance-cards">
            <div className="card">
                <p className="acc-name">Cash</p>
                <p className="acc-purse-value">14000</p>
            </div>
            <div className="card">
                <p className="acc-name">Bank</p>
                <p className="acc-purse-value">14000</p>
            </div>
            <div className="card add-card">
                <p className="new-acc-card">Add New Account</p>
            </div>
        </div>
        <div className="full-view">
            <div className="statement-table">
                <table className="table">
                    <tr>
                        <th colSpan="2">
                            Statement-1
                        </th>
                    </tr>
                    <tr>
                        <th className="expense-title-head">Title</th>
                        <th className="expense-value-head">Value</th>
                    </tr>
                    {expenseValues.map((expense) => {
                        return <tr>
                            <td className="expense-title-head">{expense.title}</td>
                            <td className="expense-value-head">{expense.value}</td>
                        </tr>
                    })}
                </table>
                <table className="table">
                    <tr>
                        <th colSpan="2">
                            Statement-2
                        </th>
                    </tr>
                    <tr>
                        <th className="expense-title-head">Title</th>
                        <th className="expense-value-head">Value</th>
                    </tr>
                    {expenseValues.map((expense) => {
                        return <tr>
                            <td className="expense-title-head">{expense.title}</td>
                            <td className="expense-value-head">{expense.value}</td>
                        </tr>
                    })}
                </table>
            </div>
        </div>
        <div className="speed-dial">
            <SpeedDial model={items} direction="up" className="speeddial-bottom-left" buttonClassName="p-button-help"
                       buttonStyle={buttonStyle}
            />
        </div>

        {openAddIncome ? (<>
            <AddIncome/>
        </>) : (<></>)}
    </div>);
};

export default HomePage;