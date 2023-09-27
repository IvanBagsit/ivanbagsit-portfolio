import "./App.css";
import Dashboard from "./Components/Dashboard";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Dashboard />
            </div>
        </Router>
    );
}

export default App;
