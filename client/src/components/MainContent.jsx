import { useState } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from 'styled-components';

// STYLED COMPONENTS 
const MainContainer = styled(motion.div)`
z-index: -1;
background: #e9fffa; 
width: 100vw;
height: 200vh;
overflow: hidden;
`;


const Main = () => {
    return (
        <MainContainer>

            <div>yoyoyo</div>            
            
        </MainContainer>
    );
}

export default Main;