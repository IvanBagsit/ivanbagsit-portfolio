import { Button, Grid, Tooltip } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { useLayoutEffect, useRef, useState } from "react";
import DeviceChecker from "../Config/DeviceChecker";
import { Parallax } from "react-scroll-parallax";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import particleAboutConfig from "../Config/ParticleAbout.json";
import styles from "./About.module.css";
import gmailIcon from "../../Images/contacts/gmailIcon.png";
import githubIcon from '../../Images/contacts/githubIcon2.png'
import linkedinIcon from "../../Images/contacts/linkedinIcon.png";
import facebookIcon from "../../Images/contacts/facebookIcon.png";
import instagramIcon from "../../Images/contacts/instagramIcon.png";
import novareLogo from "../../Images/experience/novare.jpg";
import samsungLogo from "../../Images/experience/samsung.jpg";
import latestCV from "../../Files/Ivan Bagsit - CV.pdf";
import moon from "../../Images/parallax/moon.png";
import astronaut from "../../Images/parallax/astronaut.png";

const About = () => {
    const gmailCompose = {
        recipient: "ivanbagsit23@gmail.com",
        subject: "Message from Ivan Bagsit's Portfolio",
        body: "",
    };

    const contactDetails = [
        {
            name: "Github",
            icon: githubIcon,
            link: "https://github.com/IvanBagsit",
        },
        {
            name: "Gmail",
            icon: gmailIcon,
            link: `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailCompose.recipient}&su=${gmailCompose.subject}&body=${gmailCompose.body}`,
        },
        {
            name: "LinkedIn",
            icon: linkedinIcon,
            link: "https://www.linkedin.com/in/ivan-junel-bagsit-23a482188/",
        },
        {
            name: "Facebook",
            icon: facebookIcon,
            link: "https://www.facebook.com/ivan.bagsit/",
        },
        {
            name: "Instagram",
            icon: instagramIcon,
            link: "https://www.instagram.com/ivanbagsit_/",
        },
    ];

    const handleDownload = () => {
        const fileUrl = latestCV;
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "ivanbagsit-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [isCompanyVisible, setIsCompanyVisible] = useState(false);

    const logoRef = useRef(null);

    const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        const rect = logoRef.current.getBoundingClientRect();

        let additionalSize = 0;

        const device = DeviceChecker();

        if (device === "phone") {
            additionalSize = 370;
        } else {
            additionalSize = 200;
        }

        if (rect.bottom + additionalSize < scrollPos) {
            setIsCompanyVisible(true);
        }
    };

    useLayoutEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

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
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={styles.background}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleAboutConfig}
                className={styles.particles}
            />
            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={styles.details}
                style={{ zIndex: 2 }}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5.5}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems={{
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                    }}
                    style={{ zIndex: 2 }}
                >
                    <Parallax speed={-180}>
                        <img
                            src={astronaut}
                            alt="astronaut"
                            className={styles.astronaut}
                        />
                    </Parallax>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems={{
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                    }}
                    xs={12}
                    sm={12}
                    md={6.5}
                    style={{ zIndex: 1 }}
                >
                    <Grid item className={styles.question}>
                        Who is this guy?
                    </Grid>
                    <Grid item className={styles.informations}>
                        <b>Ivan Bagsit</b> is a graduate of BS Mechatronics
                        Engineering who developed a passion for programming from
                        a young age, inspired by the TV series 'BattleBots'. He
                        began coding during his college days, primarily focusing
                        on robots using Arduino with the C/C++ programming
                        language. Now, he is expanding his passion into web
                        development to showcase his skills and further his
                        programming knowledge.
                    </Grid>
                    <Grid item className={styles.contact}>
                        <b>Contact Me:</b>
                    </Grid>
                    <Grid item className={styles.contactIconsGroup}>
                        {contactDetails.map((items, index) => {
                            return (
                                <Tooltip
                                    arrow
                                    title={items.name}
                                    key={items.name}
                                >
                                    <a href={items.link} target="_blank">
                                        <img
                                            src={items.icon}
                                            alt={items.name}
                                            className={styles.contactIcons}
                                            style={{
                                                animationDelay: `${index / 4}s`,
                                            }}
                                        />
                                    </a>
                                </Tooltip>
                            );
                        })}
                    </Grid>
                    <Grid item className={styles.downloadCV}>
                        <Button
                            variant="contained"
                            startIcon={<DownloadForOfflineIcon />}
                            onClick={handleDownload}
                            color="secondary"
                        >
                            Download CV
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{
                    height: "140vh",
                }}
            >
                <Parallax speed={20} style={{ width: "90vw" }}>
                    <img src={moon} alt="moon" className={styles.moon} />
                </Parallax>
                <Grid item className={styles.experience}>
                    Work Experience
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{marginBottom: '10vh'}}
                >
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems={{
                            xs: "center",
                            sm: "center",
                            md: "flex-end",
                        }}
                        xs={12}
                        sm={12}
                        md={7}
                    >
                        <Grid item className={styles.workTitle}>
                            <b>Samsung R&D Philippines</b>
                        </Grid>
                        <Grid item className={styles.workTitle}>
                            Software Engineer II
                        </Grid>
                        <Grid item className={styles.workTitle}>
                            March 2024-May 2025
                        </Grid>
                        <Grid item className={styles.workDescription}>
                            <ul>
                                <li>
                                    Backend Developer
                                </li>
                                <li>
                                    Worked on Machine Learning Platform for training AI Models
                                </li>
                                <li>
                                    Developed cron job feature for removing unutilized Models and Artifacts
                                </li>
                                <li>
                                    Introduced limits for logging metadata in a ML Training
                                </li>
                                <li>
                                    Developed and enhanced database migration script from 20hrs to 7mins
                                </li>
                                <li>
                                    Integrated MLFlow to in-house tracking library
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems={{
                            xs: "center",
                            sm: "center",
                            md: "flex-start",
                        }}
                        xs={12}
                        sm={12}
                        md={5}
                    >
                        <img
                            src={samsungLogo}
                            alt="samsung"
                            className={`
                            ${styles.company}
                            ${
                                DeviceChecker() === "desktop"
                                    ? styles.translateX
                                    : styles.translatePhone
                            }
                            ${
                                isCompanyVisible
                                    ? `${
                                          DeviceChecker() === "desktop"
                                              ? styles.companyAnimationX
                                              : styles.companyAnimationY
                                      }`
                                    : ""
                            }`}
                            ref={logoRef}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems={{
                            xs: "center",
                            sm: "center",
                            md: "flex-end",
                        }}
                        xs={12}
                        sm={12}
                        md={7}
                    >
                        <Grid item className={styles.workTitle}>
                            <b>MDI Novare Technologies</b>
                        </Grid>
                        <Grid item className={styles.workTitle}>
                            Software Engineer
                        </Grid>
                        <Grid item className={styles.workTitle}>
                            March 2022-January 2024
                        </Grid>
                        <Grid item className={styles.workDescription}>
                            <ul>
                                <li>
                                    Full Stack Web Developer
                                </li>
                                <li>
                                    Optimized SQL queries to enhance client-side loading time
                                </li>
                                <li>
                                    Added pagination feature to optimize display of data in a table
                                </li>
                                <li>
                                    Created a cron job feature that removes old data in the database every 15th and 30th day of the month
                                </li>
                                <li>
                                    Created a form modal for users to void a transaction
                                </li>
                                <li>
                                    Collaborated with different teams to meet client’s demand and deadline
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems={{
                            xs: "center",
                            sm: "center",
                            md: "flex-start",
                        }}
                        xs={12}
                        sm={12}
                        md={5}
                    >
                        <img
                            src={novareLogo}
                            alt="novare"
                            className={`
                            ${styles.company}
                            ${
                                DeviceChecker() === "desktop"
                                    ? styles.translateX
                                    : styles.translatePhone
                            }
                            ${
                                isCompanyVisible
                                    ? `${
                                          DeviceChecker() === "desktop"
                                              ? styles.companyAnimationX
                                              : styles.companyAnimationY
                                      }`
                                    : ""
                            }`}
                            ref={logoRef}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;
