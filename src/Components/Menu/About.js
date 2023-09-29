import { Grid, Tooltip } from "@mui/material";
import styles from "./About.module.css";
import ProfilePicture from "../../Images/owner.jpg";
import gmailIcon from "../../Images/contacts/gmailIcon.png";
import linkedinIcon from "../../Images/contacts/linkedinIcon.png";
import githubIcon from "../../Images/contacts/githubIcon.png";
import facebookIcon from "../../Images/contacts/facebookIcon.png";
import instagramIcon from "../../Images/contacts/instagramIcon.png";
import novareLogo from "../../Images/experience/novare.jpg";

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
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            className={styles.background}
        >
            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: "10vh" }}
            >
                <Grid
                    item
                    xs={5}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-end"
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
                    alignItems="flex-start"
                    xs={7}
                >
                    <Grid item className={styles.question}>
                        Who is this guy?
                    </Grid>
                    <Grid item className={styles.informations}>
                        <b>Ivan Bagsit</b> is a graduate of BS Mechatronics
                        Engineering, who became fond about programming since he
                        was little due to TV series 'BattleBots'. he started
                        coding during his college days that focuses primarily in
                        robots that uses arduino with language of C/C++. Now, he
                        expanded his passion to web development from which he
                        can showcase his skills and learn more about
                        programming.
                    </Grid>
                    <Grid item className={styles.contact}>
                        <b>Contact Me:</b>
                    </Grid>
                    <Grid item className={styles.contactIconsGroup}>
                        {contactDetails.map((items, index) => {
                            return (
                                <Tooltip arrow title={items.name}>
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
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ marginBottom: "10vh" }}
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
                        alignItems="flex-end"
                        xs={6.5}
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
                    <Grid item xs={5.5}>
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
