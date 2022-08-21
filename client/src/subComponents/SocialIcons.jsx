import React from "react";
import styled from "styled-components";
import { Email, Github, Linkedin } from './AllSvgs';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 4%;
z-index: 8;

&>*:not(:last-child) {
    margin-bottom: 1.2vmax;
}
`
const Line = styled(motion.span)`
width: max(0.2vw, 0.2vh);
transition: ease-out 0.4s;
height: 2vh;
width: 3.8vmax;
background-color: #132B35;
opacity: 1;
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <AnimatePresence>{(props.isVisible && <motion.a initial={{x:-10, opacity: 0, transition: { type:'spring', duration: 1.5}}} animate={{x:0, opacity: 1, transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 1.3}}} exit={{ x:-10, opacity: 0, transition: { type:'spring', duration: 1.5} }} href="https://github.com/luorixo" target="_blank"><Github width={'max(2vw, 2.8vh)'} height={'max(2vw, 2.8vh)'} fill="#132B35"/></motion.a>)}</AnimatePresence>
            <AnimatePresence>{(props.isVisible && <motion.a initial={{x:-10, opacity: 0, transition: { type:'spring', duration: 1.5}}} animate={{x:0, opacity: 1, transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 1.5}}} exit={{ x:-10, opacity: 0, transition: { type:'spring', duration: 1.5} }} href="https://www.linkedin.com/in/eugene-j-chua" target="_blank"><Linkedin width={'max(2vw, 2.8vh)'} height={'max(2vw, 2.8vh)'} fill="#132B35"/></motion.a>)}</AnimatePresence>
            <AnimatePresence>{(props.isVisible && <motion.a initial={{x:-10, opacity: 0, transition: { type:'spring', duration: 1.5}}} animate={{x:0, opacity: 1, transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 1.7}}} exit={{ x:-10, opacity: 0, transition: { type:'spring', duration: 1.5} }} href="mailto:luorixo@gmail.com" target="_blank"><Email width={'max(2vw, 2.8vh)'} height={'max(2vw, 2.8vh)'} fill="#132B35"/></motion.a>)}</AnimatePresence>
            <AnimatePresence>{(props.isVisible && <Line initial={
                {
                    y: 80,
                    opacity: 0
                }
            }
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                type:'spring', duration:1, delay:0, mass: 0.01
            }} exit={{ y: 30, opacity: 0, transition: { type:'spring', duration: 1} }}/>)}</AnimatePresence>
            
        </Icons>  
    )
}

export default SocialIcons;