import { Button, Grid, Tooltip } from "@mui/material";
import styles from "./About.module.css";
import ProfilePicture from "../../Images/owner1.jpg";
import gmailIcon from "../../Images/contacts/gmailIcon.png";
import linkedinIcon from "../../Images/contacts/linkedinIcon.png";
import githubIcon from "../../Images/contacts/githubIcon.png";
import facebookIcon from "../../Images/contacts/facebookIcon.png";
import instagramIcon from "../../Images/contacts/instagramIcon.png";
import novareLogo from "../../Images/experience/novare.jpg";
import latestCV from "../../Files/Latest CV.pdf";

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

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

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={styles.background}
        >
            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={styles.details}
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
                >
                    <img
                        src={ProfilePicture}
                        alt="Profile"
                        className={styles.profilePicture}
                    />
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
                >
                    <Grid item className={styles.question}>
                        Who is this guy?
                    </Grid>
                    <Grid item className={styles.informations}>
                        <b>Ivan Bagsit</b> is a graduate of BS Mechatronics
                        Engineering who developed a passion for programming from
                        a young age, inspired by the TV series 'BattleBots.' He
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
                    <Grid item>
                        <Button
                            variant="contained"
                            startIcon={<DownloadForOfflineIcon />}
                            onClick={handleDownload}
                            color="secondary"
                            style={{ marginTop: "5%" }}
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
                    height: "70vh",
                }}
            >
                <Grid item className={styles.experience}>
                    Work Experience
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
                            March 2022-Present
                        </Grid>
                        <Grid item className={styles.workDescription}>
                            As a software engineer, I was tasked to
                            develop/enhance certain features using different
                            tech stack and collaborated with different teams
                            based on client's demand and deadline.
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
                            className={styles.company}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;
