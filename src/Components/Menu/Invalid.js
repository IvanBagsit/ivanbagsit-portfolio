import styles from "./Invalid.module.css";
import { Grid, Typography } from "@mui/material";

const Invalid = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={styles.background}
        >
            <Grid item>
                <Typography variant={"h5"}>
                    <b>Error 404</b>
                </Typography>
            </Grid>
            <Grid item>Page Not Found!</Grid>
            <div className={styles.circle}></div>
        </Grid>
    );
};

export default Invalid;
