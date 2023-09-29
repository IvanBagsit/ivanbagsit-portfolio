import {
    Card,
    CardContent,
    Grid,
    Typography,
    Tooltip,
    CardMedia,
    CardActionArea,
} from "@mui/material";
import styles from "./Portfolio.module.css";
import expenseChart from "../../Images/portfolio/expenseChart.png";
import gymMembership from "../../Images/portfolio/gymMembership.png";
import javascriptIcon from "../../Images/logo/javascriptIcon.png";
import typescriptIcon from "../../Images/logo/typescriptIcon.png";
import htmlIcon from "../../Images/logo/htmlIcon.png";
import cssIcon from "../../Images/logo/cssIcon.png";
import reactIcon from "../../Images/logo/reactIcon.png";
import angularIcon from "../../Images/logo/angularIcon.png";
import javaIcon from "../../Images/logo/javaIcon.png";
import springbootIcon from "../../Images/logo/springbootIcon.png";

const Portfolio = () => {
    const expenseTrackerTech = [
        {
            title: "React",
            icon: reactIcon,
        },
        {
            title: "Javascript",
            icon: javascriptIcon,
        },
        {
            title: "HTML",
            icon: htmlIcon,
        },
        {
            title: "CSS",
            icon: cssIcon,
        },
    ];

    const gymMembershipTech = [
        {
            title: "Angular",
            icon: angularIcon,
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
            <Grid item style={{ marginRight: "1%" }}>
                <Card>
                    <CardActionArea
                        onClick={() =>
                            window.open(
                                "https://expense-chart-ecru.vercel.app/",
                                "_blank"
                            )
                        }
                    >
                        <CardMedia>
                            <img
                                src={expenseChart}
                                alt="expense-chart"
                                className={styles.cardImage}
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography>
                                <span className={styles.details}>
                                    Simple Weekly Expense Tracker
                                </span>
                            </Typography>
                            {expenseTrackerTech.map((item) => {
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
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className={styles.box1}></div>
            </Grid>
            <Grid item style={{ marginLeft: "1%" }}>
                <Card className={styles.item}>
                    <CardActionArea
                        onClick={() =>
                            window.open(
                                "https://github.com/IvanBagsit/GymMembership",
                                "_blank"
                            )
                        }
                    >
                        <CardMedia>
                            <img
                                src={gymMembership}
                                alt="gym-membership"
                                className={styles.cardImage}
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography>
                                <span className={styles.details}>
                                    Gym Membership
                                </span>
                            </Typography>
                            {gymMembershipTech.map((item) => {
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
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className={styles.box2}></div>
            </Grid>
        </Grid>
    );
};

export default Portfolio;
