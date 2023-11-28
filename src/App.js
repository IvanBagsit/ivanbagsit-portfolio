import "./App.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
    return (
        <ParallaxProvider>
            <Router>
                <div className="App">
                    <Dashboard />
                </div>
            </Router>
        </ParallaxProvider>
    );
}

export default App;
