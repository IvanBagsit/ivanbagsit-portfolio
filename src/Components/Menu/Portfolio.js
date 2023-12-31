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
import materialuiIcon from "../../Images/logo/materialuiIcon.png";
import mySQLIcon from "../../Images/logo/mysqlIcon.png";
import expressIcon from "../../Images/logo/expressIcon.png";
import mongodbIcon from "../../Images/logo/mongodbIcon.png";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import particlePortfolioConfig from "../Config/Particle.json";

const Portfolio = () => {
    const sneakersRepublicTech = [
        {
            title: "React",
            icon: reactIcon,
        },
        {
            title: "Material Ui",
            icon: materialuiIcon,
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
        {
            title: "ExpressJS",
            icon: expressIcon,
        },
        {
            title: "MongoDB Atlas",
            icon: mongodbIcon,
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
        {
            title: "mySQL",
            icon: mySQLIcon,
        },
    ];

    const cardList = [
        {
            name: "Sneakers Republic",
            image: sneakersRepublic,
            link: "https://sneakers-republic.vercel.app/",
            title: "Sneakers Republic",
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

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            className={styles.background}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlePortfolioConfig}
                className={styles.particles}
            />

            {cardList.map((item) => {
                return (
                    <Grid item key={item.name} style={{ zIndex: "10" }}>
                        <Card>
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
                                            <Tooltip
                                                title={item.title}
                                                arrow
                                                key={item.title}
                                            >
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
