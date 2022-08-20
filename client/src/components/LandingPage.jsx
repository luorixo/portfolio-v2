import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { keyframes } from 'styled-components';

import FeatherParticles from "../subComponents/FeatherParticles";
import { GreenBird } from "../subComponents/AllSvgs";
import MainContent from "./MainContent";

// STYLED COMPONENTS
const PageContainer = styled(motion.div)`
`;

const LandingContainer = styled(motion.div )`
z-index: 3;
background: #007859;
width: 100vw;
height: 100vh;
overflow: hidden;
position: fixed;
z-index: 0;
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

const Center = styled(motion.button)` // the bird + text
z-index: 10;
position: fixed;
top: 85%;
left: 92%;
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

&>:first-child { // the bird
    animation: ${bounce} infinite 1.1s linear;
}
&>:last-child { // the 'click me' text
    margin-top: 1rem;
}`

const LandingPage = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click); // goes from true to false
        document.body.style.overflow = click ? "hidden" : "scroll"; // prevents scrolling on landing page
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
      }, []);

    return (
        <PageContainer>
            <FeatherParticles/>
            <Center style={{top: click ? '87%' : '50%', left: click ? '91%' : '50%',}} initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: 0.05}}>
                <GreenBird style={{cursor:'pointer', transition: '1.1s ease-out'}} onClick={()=> handleClick()} width={click ? 'min(14vw, 15vh)' : 'max(14vw, 20vh)'} 
                height={click ? 'min(12vw, 13vh)' : 'max(14vw, 20vh)'} alt='clickable green bird icon'/><span style={{color:'#fff', display: click ? 'none' : 'block', fontFamily: '"Press Start 2P", cursive', fontSize: '0.9vmax'}}>click me ↑</span>
            </Center>
            
            <AnimatePresence>
                {!click && (<LandingContainer key="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 1}}/>)}
            </AnimatePresence>

            <AnimatePresence>
                <MainContent isVisible={click}/>
            </AnimatePresence>

            
        </PageContainer>
    );
}

export default LandingPage;