import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: ${(props) => props.theme.bodyheight};
    width: 100%;
    flex-grow: 1;
`;

const HomepageImage = styled.img`
    width: 100%;
    animation: ${fadein} 1s;
`;

const ImageContainer = styled.div`
    width: 100%;
    animation: ${fadein} 1s;
    display: flex;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        flex-direction: column;
    }
    flex-grow: 1;
`;

const InfoHeader = styled.div`
    margin: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
    font-size: 24px;
`;

const InfoHeaderContainer = styled.div`
    width: 100%;
`;

const HeadshotContainer = styled.div`
    animation: ${fadein} 1s;
    flex-grow: 1;
    flex-basis: 0;
    padding: 30px;
    display: flex;
    justify-content: center;
`;

const Headshot = styled.img`
    width: 80%;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 1px grey;
`;

const AboutContainer = styled.div`
    padding: 30px;
    animation: ${fadein} 1s;
    // flex-grow: 1;
    // flex-basis: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const About = styled.div`
    width: 80%;
    font-size: 20px;
    text-align: center;
`;

export {
    HomepageContainer,
    ImageContainer,
    HomepageImage,
    InfoContainer,
    InfoHeader,
    InfoHeaderContainer,
    HeadshotContainer,
    Headshot,
    AboutContainer,
    About,
};
