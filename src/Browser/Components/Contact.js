import React from "react";

import {
    ContactContainer,
    ContactHeader,
    ContactImage,
    Email
} from "./Styles/ContactStyles";
import ContactMImage from "../../Images/contact.jpg";

const Contact = () => {
    return (
        <ContactContainer>
            <ContactImage src={ContactMImage} />
            <ContactHeader>
                For additional information or to see more images, please send us
                an email. I'll get back to you soon and thank you for your
                interest!
            </ContactHeader>
            <Email>{"lauren@laurenkarp.com"}</Email>
        </ContactContainer>
    );
};

export default Contact;
