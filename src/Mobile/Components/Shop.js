import React from "react";
import { ShopImage, ShopText, ShopTextContainer } from "./Styles/ShopStyles";

const Shop = () => {
    return (
        <>
            <ShopImage src="/Images/ShopImage.png" />
            <ShopTextContainer>
                <ShopText>
                    If you would like to purchase a print of any of my works,
                    please visit my Saatchi Art webpage using the following
                    link: &nbsp;
                    <br />
                    <a href="https://www.saatchiart.com/laurenkarp">
                        SAATCHI Art.
                    </a>
                </ShopText>
            </ShopTextContainer>
        </>
    );
};

export default Shop;
