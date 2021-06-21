import React from "react";

import {
    ContactContainer,
    ContactHeader,
    ContactImage,
    Email
} from "./Styles/ContactStyles";

const Contact = () => {
    return (
        <ContactContainer>
            <ContactImage src="/Images/contact.jpg" />
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
