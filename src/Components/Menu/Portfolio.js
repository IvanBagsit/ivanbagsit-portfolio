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
import gymMembership from "../../Images/portfolio/gymMembership.png";
import sneakersRepublic from "../../Images/portfolio/sneakersRepublic.png";
import javascriptIcon from "../../Images/logo/javascriptIcon.png";
import typescriptIcon from "../../Images/logo/typescriptIcon.png";
import htmlIcon from "../../Images/logo/htmlIcon.png";
import cssIcon from "../../Images/logo/cssIcon.png";
import reactIcon from "../../Images/logo/reactIcon.png";
import angularIcon from "../../Images/logo/angularIcon.png";
import javaIcon from "../../Images/logo/javaIcon.png";
import springbootIcon from "../../Images/logo/springbootIcon.png";

const Portfolio = () => {
    const sneakersRepublicTech = [
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

    const cardList = [
        {
            name: "Sneakers Republic (Ongoing)",
            image: sneakersRepublic,
            link: "https://sneakers-republic.vercel.app/",
            title: "Sneakers Republic (Ongoing)",
            techStack: sneakersRepublicTech,
        },
        {
            name: "Gym Membership",
            image: gymMembership,
            link: "https://github.com/IvanBagsit/GymMembership",
            title: "Gym membership",
            techStack: gymMembershipTech,
        },
    ];

    const randomDurationGenerator = () => {
        const min = 5;
        const max = 15;
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        const duration = randomValue.toString() + "s";
        return duration;
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            className={styles.background}
        >
            <div className={styles.bubbles}>
                {[...Array(25)].map((item, index) => {
                    return (
                        <span
                            style={{
                                animationDuration: randomDurationGenerator(),
                            }}
                        />
                    );
                })}
            </div>
            {cardList.map((item) => {
                return (
                    <Grid item>
                        <Card style={{ zIndex: "10" }}>
                            <CardActionArea
                                onClick={() => window.open(item.link, "_blank")}
                            >
                                <CardMedia>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className={styles.cardImage}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography>
                                        <span className={styles.details}>
                                            {item.title}
                                        </span>
                                    </Typography>
                                    {item.techStack.map((item) => {
                                        return (
                                            <Tooltip title={item.title} arrow>
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    className={
                                                        styles.technologies
                                                    }
                                                />
                                            </Tooltip>
                                        );
                                    })}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Portfolio;
