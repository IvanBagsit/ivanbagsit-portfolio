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

const Home = () => {
    const listTechnologies = [
        {
            title: "React",
            icon: reactIcon,
        },
        {
            title: "Angular",
            icon: angularIcon,
        },
        {
            title: "Javascript",
            icon: javascriptIcon,
        },
        {
            title: "Typescript",
            icon: typescriptIcon,
        },
        {
            title: "HTML",
            icon: htmlIcon,
        },
        {
            title: "CSS",
            icon: cssIcon,
        },
        {
            title: "Java",
            icon: javaIcon,
        },
        {
            title: "Springboot",
            icon: springbootIcon,
        },
    ];
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
                    I'm a full stack web developer with experiences in the
                    following tech stack:
                </Grid>
                <Grid item className={styles.description}>
                    {listTechnologies.map((item) => {
                        return (
                            <Tooltip title={item.title} arrow>
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className={styles.technologies}
                                />
                            </Tooltip>
                        );
                    })}
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
