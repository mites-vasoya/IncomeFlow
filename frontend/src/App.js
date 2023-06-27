import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./page/HomePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
