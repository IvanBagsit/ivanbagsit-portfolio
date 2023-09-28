import { Routes, Route } from "react-router-dom";
import Appbar from "./Appbar/Appbar";
import styles from "./Dashboard.module.css";
import Home from "./Menu/Home";
import About from "./Menu/About";
import Portfolio from "./Menu/Portfolio";

const Dashboard = () => {
    return (
        <div className={styles.background}>
            <Appbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    );
};

export default Dashboard;
