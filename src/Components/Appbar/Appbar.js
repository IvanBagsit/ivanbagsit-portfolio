import { ButtonGroup, Button, Toolbar, AppBar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Appbar.module.css";

const Appbar = () => {
    const buttonGroupStyle = {
        color: "black",
        fontWeight: "bolder",
        fontFamily: "Blooming Elegant Sans Bold",
    };

    return (
        <Box>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Link to={"/"}>
                        <Button variant="text">
                            <span className={styles.home}>IVAN BAGSIT</span>
                        </Button>
                    </Link>
                    <ButtonGroup variant="text">
                        <Link to={"/home"}>
                            <Button
                                style={{ borderRightColor: "#7c7775" }}
                                sx={buttonGroupStyle}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to={"/about"}>
                            <Button
                                style={{ borderRightColor: "#7c7775" }}
                                sx={buttonGroupStyle}
                            >
                                About Me
                            </Button>
                        </Link>
                        <Link to={"/portfolio"}>
                            <Button
                                style={{ borderRightColor: "#7c7775" }}
                                sx={buttonGroupStyle}
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
