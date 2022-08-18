import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from 'styled-components';
import LogoComponent from "../subComponents/Logo";

// STYLED COMPONENTS 
const MainContainer = styled(motion.div)`
z-index: -1;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(75,153,186,1) 100%); 
width: 100vw;
height: 400vh;
`;

const ProgressBar = styled(motion.div)`
position: fixed;
bottom: 0;
left: 0;
right: 0;
height: 1vh;
width: 100vw;
background: #007859;
transform-origin: 0%;
z-index: 0;
border-radius: 0px;
`;

const MainContent = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.0001
     });

    return (
        <MainContainer>
            
            <ProgressBar
            style={{ scaleX }}
            />
            <div>yoyoyo</div>
        </MainContainer>
    );
}

export default MainContent;