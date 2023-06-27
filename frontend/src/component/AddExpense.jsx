import React, {useState} from 'react';
import "./AddIncomeExpense.css"
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {InputTextarea} from "primereact/inputtextarea";
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import {FileUpload} from "primereact/fileupload";

const AddExpense = ({setOpenAddExpense}) => {
    const [accType, setAccType] = useState(null);
    const [paymentType, setPaymentType] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [note, setNote] = useState('');
    const [datetime24h, setDateTime24h] = useState(null);

    const accounts = [{name: 'New York', code: 'NY'}, {name: 'Rome', code: 'RM'}, {
        name: 'London', code: 'LDN'
    }, {name: 'Istanbul', code: 'IST'}, {name: 'Paris', code: 'PRS'}];

    const paymentStatuses = [{name: "Cleared"}, {name: "Unclear"}, {name: "Pending"},]

    return (
        <div className="add-div">
            <div className="add-form">
                <div className="p-inputgroup input-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi-money-bill"></i>
                     </span>
                    <InputText placeholder="Enter Amount"/>
                </div>
                <div className="input-field">
                    <Dropdown value={accType} onChange={(e) => setAccType(e.value)} options={accounts}
                              optionLabel="name"
                              showClear placeholder="Select Account Type" className="w-full md:w-16rem"/>
                    <Dropdown value={accType} onChange={(e) => setPaymentType(e.value)} options={accounts}
                              optionLabel="name"
                              showClear placeholder="Select Payment Type" className="w-full md:w-16rem"/>
                </div>
                <div className="input-field">
                    <InputTextarea value={note} onChange={(e) => setNote(e.target.value)} rows={5} cols={80} name="note"
                                   placeholder="Enter Note"/>
                </div>
                <div className="input-field">
                    <Dropdown value={paymentStatus} onChange={(e) => setPaymentStatus(e.value)}
                              options={paymentStatuses}
                              optionLabel="name"
                              showClear placeholder="Select Payment Status" className="w-full md:w-16rem"/>
                    <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime
                              hourFormat="24" className="calendar-box" placeholder="Payment Date & Time"/>
                </div>
                <div className="input-field">
                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000}
                                className="custom-fileupload"
                        // onUpload={onUpload}
                    />
                </div>
                <div className="input-field">
                    <Button label="Cancel" severity="danger" className="cancel-btn"
                            onClick={() => setOpenAddExpense(false)}/>
                    <Button label="Add" severity="success" className="add-btn"/>
                </div>

            </div>
        </div>);
};

export default AddExpense;