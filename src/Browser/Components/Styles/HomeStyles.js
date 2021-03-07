import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: ${(props) => props.theme.bodyheight};
    width: 100%;
    flex-grow: 1;
`

const ImageContainer = styled.div`
    width: 100%;
    animation: ${fadein} 1s;
    display: flex;
`

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        flex-direction: column;
    }
    flex-grow: 1;
`

const InfoHeader = styled.div`
    margin: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
    font-size: 24px;
`

const AboutContainer = styled.div`
    padding: 30px;
    animation: ${fadein} 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const About = styled.div`
    width: 80%;
    font-size: 20px;
    text-align: center;
    @media (max-width: 450px) {
        width: 95%;
        font-size: 18px;
    }
`

export {
    HomepageContainer,
    ImageContainer,
    InfoContainer,
    InfoHeader,
    AboutContainer,
    About,
}
