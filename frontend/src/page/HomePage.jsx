import React, {useEffect, useState} from 'react';
import "./HomePage.css"
import {SpeedDial} from "primereact/speeddial";
import {Tooltip} from "primereact/tooltip";
import AddIncome from "../component/AddIncome";
import AddExpense from "../component/AddExpense";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";

const HomePage = () => {
    const [customers, setCustomers] = useState([]);
    const [openAddIncome, setOpenAddIncome] = useState(false)
    const [openAddExpense, setOpenAddExpense] = useState(false)

    const customersArr = [{
        id: 1000,
        name: 'James Butt',
        country: {
            name: 'Algeria', code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
            name: 'Ioni Bowcher', image: 'ionibowcher.png'
        },
        balance: 70663
    }, {
        id: 1001,
        name: 'Josephine Darakjy',
        country: {
            name: 'Egypt', code: 'eg'
        },
        company: 'Chanay, Jeffrey A Esq',
        date: '2019-02-09',
        status: 'proposal',
        verified: true,
        activity: 0,
        representative: {
            name: 'Amy Elsner', image: 'amyelsner.png'
        },
        balance: 82429
    }, {
        id: 1002,
        name: 'Art Venere',
        country: {
            name: 'Panama', code: 'pa'
        },
        company: 'Chemel, James L Cpa',
        date: '2017-05-13',
        status: 'qualified',
        verified: false,
        activity: 63,
        representative: {
            name: 'Asiya Javayant', image: 'asiyajavayant.png'
        },
        balance: 28334
    }, {
        id: 1003,
        name: 'Lenna Paprocki',
        country: {
            name: 'Slovenia', code: 'si'
        },
        company: 'Feltz Printing Service',
        date: '2020-09-15',
        status: 'new',
        verified: false,
        activity: 37,
        representative: {
            name: 'Xuxue Feng', image: 'xuxuefeng.png'
        },
        balance: 88521
    }, {
        id: 1004,
        name: 'Donette Foller',
        country: {
            name: 'South Africa', code: 'za'
        },
        company: 'Printing Dimensions',
        date: '2016-05-20',
        status: 'proposal',
        verified: true,
        activity: 33,
        representative: {
            name: 'Asiya Javayant', image: 'asiyajavayant.png'
        },
        balance: 93905
    }, {
        id: 1005,
        name: 'Simona Morasca',
        country: {
            name: 'Egypt', code: 'eg'
        },
        company: 'Chapman, Ross E Esq',
        date: '2018-02-16',
        status: 'qualified',
        verified: false,
        activity: 68,
        representative: {
            name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'
        },
        balance: 50041
    }, {
        id: 1006,
        name: 'Mitsue Tollner',
        country: {
            name: 'Paraguay', code: 'py'
        },
        company: 'Morlong Associates',
        date: '2018-02-19',
        status: 'renewal',
        verified: true,
        activity: 54,
        representative: {
            name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'
        },
        balance: 58706
    }]

    const buttonStyle = {backgroundColor: "#0f2a4b", border: "1px solid #0f2a4b"}

    const handleIncomeBtn = () => {
        setOpenAddIncome(!openAddIncome)
    }

    const handleExpenseBtn = () => {
        setOpenAddExpense(!openAddExpense)
    }

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text/>;
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>;

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
                <DataTable
                    className="data-table"
                    value={customersArr} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{minWidth: '50rem'}}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft}
                    paginatorRight={paginatorRight}>
                    <Column field="name" header="Date" style={{width: '25%'}}></Column>
                    <Column field="country.name" header="Payment Type" style={{width: '25%'}}></Column>
                    <Column field="company" header="Account Type" style={{width: '25%'}}></Column>
                    <Column field="representative.name" header="Payment Status" style={{width: '15%'}}></Column>
                    <Column field="representative.name" header="Note" style={{width: '10%'}}></Column>
                </DataTable>

                <DataTable
                    className="data-table"
                    value={customersArr} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{minWidth: '50rem'}}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft}
                    paginatorRight={paginatorRight}>
                    <Column field="name" header="Date" style={{width: '25%'}}></Column>
                    <Column field="country.name" header="Payment Type" style={{width: '25%'}}></Column>
                    <Column field="company" header="Account Type" style={{width: '25%'}}></Column>
                    <Column field="representative.name" header="Payment Status" style={{width: '15%'}}></Column>
                    <Column field="representative.name" header="Note" style={{width: '10%'}}></Column>
                </DataTable>
            </div>
        </div>
        <div className="speed-dial">
            <SpeedDial model={items} direction="up" className="speeddial-bottom-left" buttonClassName="p-button-help"
                       buttonStyle={buttonStyle}
            />
        </div>

        {openAddIncome ? (<>
            <AddIncome setOpenAddIncome={setOpenAddIncome}/>
        </>) : (<></>)}
        {openAddExpense ? (<>
            <AddExpense setOpenAddExpense={setOpenAddExpense}/>
        </>) : (<></>)}
    </div>);
};

export default HomePage;