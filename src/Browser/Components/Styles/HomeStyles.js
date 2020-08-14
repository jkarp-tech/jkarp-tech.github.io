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
    height: ${(props) => props.theme.bodyheight};
`;

const HomepageImage = styled.img`
    width: 100%;
    animation: ${fadein} 1s;
`;

const ImageContainer = styled.div`
    animation: ${fadein} 1s;
`;

const InfoContainer = styled.div`
    display: flex;
    @media (max-width: ${(props) => props.theme.xs}) {
        flex-direction: column;
    }
`;

const HeadshotContainer = styled.div`
    animation: ${fadein} 1s;
`;

const Headshot = styled.img`
    width: 100%;
`;

const AboutContainer = styled.div`
    animation: ${fadein} 1s;
`;

const About = styled.div`
    font-size: 20px;
`;

export {
    HomepageContainer,
    ImageContainer,
    HomepageImage,
    InfoContainer,
    HeadshotContainer,
    Headshot,
    AboutContainer,
    About,
};
