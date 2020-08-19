import React from "react";

import { ContactContainer, ContactHeader, Email } from "./Styles/ContactStyles";

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>
                For additional information or to see more images, please send us
                an email. I'll get back to you soon and thank you for your
                interest!
            </ContactHeader>
            <Email>{"FirstnameLastname@gmail.com"}</Email>
        </ContactContainer>
    );
};

export default Contact;
