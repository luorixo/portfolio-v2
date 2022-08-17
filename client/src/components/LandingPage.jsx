import { useState } from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';
import FeatherParticles from "../subComponents/FeatherParticles";

const MainContainer = styled(motion.div)`
background: #007859; 
width: 100vw;
height: 100vh;
overflow: hidden;
position: fixed;
`;

const Main = () => {

    const [click, setClick] = useState(false);
    const onClick = () => setClick(!click);

    return (
        <MainContainer>
            <FeatherParticles/>
        </MainContainer>
    );
}

export default Main;