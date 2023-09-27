import { Grid } from "@mui/material";
import styles from "./Home.module.css";
import ProfilePicture from "../../Images/owner.jpg";

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
                xs={6}
            >
                <Grid item className={styles.name}>
                    Hi, I'm Ivan
                </Grid>
                <Grid item className={styles.description}>
                    I'm a full stack web developer having an experience in the
                    following:
                </Grid>
                <Grid item className={styles.description}>
                    React, Angular, Javascript, Typescript, CSS, HTML, Java,
                    SpringBoot
                </Grid>
                <Grid item className={styles.description}>
                    I believe in making websites that are clean, simple, and
                    easy to use.
                </Grid>
            </Grid>
            <Grid item xs={6}>
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
