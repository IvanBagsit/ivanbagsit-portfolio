import { ButtonGroup, Button, Toolbar, AppBar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Appbar.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Appbar = () => {
    const [isLocationAboutMe, setIsLocationAboutMe] = useState(false);

    const location = useLocation();

    const buttonGroupStyle = {
        fontWeight: "bolder",
        fontFamily: "Blooming Elegant Sans Bold",
    };

    const appBarStyle = {
        backgroundColor: `${isLocationAboutMe ? "#0c192c" : "transparent"}`,
        transition: "background-color 0.5s linear",
        boxShadow: "none",
    };

    useEffect(() => {
        if (location.pathname === "/about") {
            setIsLocationAboutMe(true);
        } else {
            setIsLocationAboutMe(false);
        }
    }, [location]);

    return (
        <Box>
            <AppBar style={appBarStyle}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Link to={"/"}>
                        <Button variant="text">
                            <span
                                className={styles.home}
                                style={{
                                    color: "#ffffff",
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
                                    borderRightColor: "#ffffff",
                                    color: "#ffffff",
                                }}
                                sx={buttonGroupStyle}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to={"/about"}>
                            <Button
                                style={{
                                    borderRightColor: "#ffffff",
                                    color: "#ffffff",
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
                                    color: "#ffffff",
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
