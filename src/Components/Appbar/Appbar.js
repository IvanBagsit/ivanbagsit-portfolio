import { ButtonGroup, Button, Toolbar, AppBar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Appbar.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Appbar = () => {
    const [isLocationPortfolio, setIsLocationPortfolio] = useState(false);

    const location = useLocation();

    const buttonGroupStyle = {
        fontWeight: "bolder",
        fontFamily: "Blooming Elegant Sans Bold",
    };

    const appBarStyle = {
        backgroundColor: isLocationPortfolio ? "#0c192c" : "#bffdd9",
        transition: "background-color 0.5s linear",
    };

    useEffect(() => {
        if (location.pathname === "/portfolio") {
            setIsLocationPortfolio(true);
        } else {
            setIsLocationPortfolio(false);
        }
    }, [location]);

    return (
        <Box>
            <AppBar position="static" style={appBarStyle}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Link to={"/"}>
                        <Button variant="text">
                            <span
                                className={styles.home}
                                style={{
                                    color: `${
                                        isLocationPortfolio
                                            ? "#ffffff"
                                            : "#000000"
                                    }`,
                                }}
                            >
                                IVAN BAGSIT
                            </span>
                        </Button>
                    </Link>
                    <ButtonGroup variant="text">
                        <Link to={"/home"}>
                            <Button
                                style={{
                                    borderRightColor: `${
                                        isLocationPortfolio
                                            ? "#ffffff"
                                            : "#000000"
                                    }`,
                                    color: `${
                                        isLocationPortfolio
                                            ? "#ffffff"
                                            : "#000000"
                                    }`,
                                }}
                                sx={buttonGroupStyle}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to={"/about"}>
                            <Button
                                style={{
                                    borderRightColor: `${
                                        isLocationPortfolio
                                            ? "#ffffff"
                                            : "#000000"
                                    }`,
                                    color: `${
                                        isLocationPortfolio
                                            ? "#ffffff"
                                            : "#000000"
                                    }`,
                                }}
                                sx={buttonGroupStyle}
                            >
                                About Me
                            </Button>
                        </Link>
                        <Link to={"/portfolio"}>
                            <Button
                                sx={buttonGroupStyle}
                                style={{
                                    color: `${
                                        isLocationPortfolio
                                            ? "#ffffff"
                                            : "#000000"
                                    }`,
                                }}
                            >
                                Portfolio
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Appbar;
