import React from "react";
import styled from "styled-components";
import { Email, Github, Linkedin } from './AllSvgs';
import { motion } from "framer-motion";

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 5%;
z-index: 10;

&>*:not(:last-child) {
    margin-bottom: calc(1.5vmax);
}
`
const Line = styled(motion.span)`
width: max(0.2vw, 0.2vh);
transition: ease-out 0.4s;
height: 5vmax;
background-color: #132B35;
opacity: 1;
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <a href="https://github.com/luorixo" target="_blank"><Github width={'max(2vw, 2.8vh)'} height={'max(2vw, 2.8vh)'}    fill="#132B35"/></a>
            <a href="https://www.linkedin.com/in/eugene-j-chua" target="_blank"><Linkedin width={'max(2vw, 2.8vh)'} height={'max(2vw, 2.8vh)'} fill="#132B35"/></a>
            <a href="mailto:luorixo@gmail.com" target="_blank"><Email width={'max(2vw, 2.8vh)'} height={'max(2vw, 2.8vh)'} fill="#132B35"/></a>
            <Line/>
            
        </Icons>  
    )
}

export default SocialIcons;