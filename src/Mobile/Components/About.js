import React from "react";
import {
    AboutImage,
    AboutText,
    AboutTextContainer
} from "./Styles/AboutStyles";

const About = () => {
    return (
        <>
            <AboutImage src="/Images/about.jpeg" />
            <AboutTextContainer>
                <AboutText>
                    Lauren Karp is a nature photographer who specializes in
                    artistic wildlife photos.
                    <br />
                    <br />
                    Raised in the bucolic countryside of Pennsylvania, Lauren
                    spent her childhood in lush fields, meandering creeks and
                    scenic farmlands. Amid this backdrop, she pursued many forms
                    of creative expression including painting, calligraphy and
                    clothing design. Her artistic journey continued as an art
                    director for an international print and poster company.
                    Having been inspired by world-renowned photographers, she
                    combined her love of art and nature with a passion for
                    photography.
                    <br />
                    <br />
                    Exploring with her camera at her side, Lauren now travels
                    extensively, capturing her vision of the beauty in the
                    natural world. Her images capture a snapshot in time, giving
                    viewers a quiet moment of emotive contemplation.
                </AboutText>
            </AboutTextContainer>
        </>
    );
};

export default About;
