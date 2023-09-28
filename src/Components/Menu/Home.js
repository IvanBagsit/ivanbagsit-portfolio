import { Grid, Tooltip } from "@mui/material";
import styles from "./Home.module.css";
import ProfilePicture from "../../Images/owner.jpg";
import javascriptIcon from "../../Images/logo/javascriptIcon.png";
import typescriptIcon from "../../Images/logo/typescriptIcon.png";
import htmlIcon from "../../Images/logo/htmlIcon.png";
import cssIcon from "../../Images/logo/cssIcon.png";
import reactIcon from "../../Images/logo/reactIcon.png";
import angularIcon from "../../Images/logo/angularIcon.png";
import javaIcon from "../../Images/logo/javaIcon.png";
import springbootIcon from "../../Images/logo/springbootIcon.png";
import { useEffect } from "react";

const Home = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.background}
        >
            <Grid
                container
                item
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
                xs={6.5}
                className={styles.messages}
            >
                <Grid item className={styles.name}>
                    Hi, I'm Ivan
                </Grid>
                <Grid item className={styles.description}>
                    I'm a full stack web developer having an experience in the
                    following:
                </Grid>
                <Grid item className={styles.description}>
                    <Tooltip title={"React"} arrow>
                        <img
                            src={reactIcon}
                            alt="react"
                            className={styles.technologies}
                        />
                    </Tooltip>
                    <Tooltip title={"Angular"} arrow>
                        <img
                            src={angularIcon}
                            alt="angular"
                            className={styles.technologies}
                        />
                    </Tooltip>
                    <Tooltip title={"Javascript"} arrow>
                        <img
                            src={javascriptIcon}
                            alt="javascript"
                            className={styles.technologies}
                        />
                    </Tooltip>
                    <Tooltip title={"Typescript"} arrow>
                        <img
                            src={typescriptIcon}
                            alt="typescript"
                            className={styles.technologies}
                        />
                    </Tooltip>
                    <Tooltip title={"HTML"} arrow>
                        <img
                            src={htmlIcon}
                            alt="html"
                            className={styles.technologies}
                        />
                    </Tooltip>
                    <Tooltip title={"CSS"} arrow>
                        <img
                            src={cssIcon}
                            alt="css"
                            className={styles.technologies}
                        />
                    </Tooltip>
                    <Tooltip title={"Java"} arrow>
                        <img
                            src={javaIcon}
                            alt="java"
                            className={styles.technologies}
                        />
                    </Tooltip>
                    <Tooltip title={"Springboot"} arrow>
                        <img
                            src={springbootIcon}
                            alt="springboot"
                            className={styles.technologies}
                        />
                    </Tooltip>
                </Grid>
                <Grid item className={styles.description}>
                    I believe in making websites that are clean, simple, and
                    easy to use.
                </Grid>
                <Grid>Feel free to checkout other informations about me.</Grid>
            </Grid>
            <Grid item xs={5.5} className={styles.profile}>
                <img
                    src={ProfilePicture}
                    alt="Profile"
                    className={styles.profilePicture}
                />
            </Grid>
        </Grid>
    );
};

export default Home;
