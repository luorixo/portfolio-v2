import { useState } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from 'styled-components';

import FeatherParticles from "../subComponents/FeatherParticles";
import { GreenBird } from "../subComponents/AllSvgs";
import MainContent from "./MainContent";

// STYLED COMPONENTS
const PageContainer = styled(motion.div)`

`;

const LandingContainer = styled(motion.div)`
z-index: -1;
background: #007859; 
width: 100vw;
height: 100vh;
overflow: hidden;
position: fixed;
`;

const bounce = keyframes`
0% {
    transform: translate(0, 0);
}
20% {
    transform: translate(0, 2px);
}
50% {
    transform: translate(0, 23px);
}
60% {
    transform: translate(0, 6px);
}
80% {
    transform: translate(0, 2px);
}
100% {
    transform: translate(0, 0);
}`

const Center = styled.button` // the bird + text
z-index: 10;
position: fixed;
top: ${props => props.click ? '85%' :'50%'};
left: ${props => props.click ? '92%' :'50%'};

transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
-webkit-tap-highlight-color: transparent;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1.1s ease;
z-index: 10;

&>:first-child { // the bird
    animation: ${bounce} infinite 1.1s linear;
}
&>:last-child { // the 'click me' text
    display: ${props => props.click ? 'none' : 'inline-block' };
    margin-top: 1rem;
}`

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); // goes from true to false

    return (
        <PageContainer>
            <FeatherParticles/>
            <LandingContainer/>
            <Center>
                <GreenBird style={{cursor:'pointer'}} onClick={()=> handleClick()} width={click ? 'min(14vw, 15vh)' : 'max(14vw, 20vh)'} 
                height={click ? 'min(14vw, 15vh)' : 'max(14vw, 20vh)'} fill='currentColor' alt='clickable green bird icon'/><span style={{color:'#fff'}}>click me ↑</span>
            </Center>
            {click ? <MainContent/> : <LandingContainer/>}
        </PageContainer>
    );
}

export default Main;