import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ScrollIntoView from 'react-scroll-into-view';

const NavBox = styled(motion.div)`
display: flex;
gap: calc(0.1rem + 4vw);
position: absolute;
top: 6.35%;
right: 5%;
z-index: 10;
height: calc(1.25rem + 0.5vw);

button:hover {
    color: #C2DC71;
}
`;

const NavButton = styled(motion.button)`
background: none;
border: none;
padding: 0;
cursor: pointer;
color: #ffffff;
font-family: 'Press Start 2P', cursive;
font-size: calc(0.5em + 0.7vw);
text-shadow:  3px 2px #132B35;
`;

const Bold = styled(motion.text)`
font-size: calc(1em + 0.7vw);
`;

const NavigationComponent = (props) => {
    return (
        
        <NavBox>
            <AnimatePresence>
            {(props.isVisible &&
            <ScrollIntoView selector={"#" + props.about}><NavButton whileTap={{scale: 0.85}} whileHover={{ scale: [null, 1.25, 1.18] }} transition={{ duration: 0.3 }} initial={{
                y:-100,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0.1}
            }}
            exit={{ y:-100 }}>
                <Bold>➽</Bold>me</NavButton></ScrollIntoView>)}
            </AnimatePresence>
            
            <AnimatePresence>
            {(props.isVisible &&
            <ScrollIntoView selector={"#" + props.projects}><NavButton whileTap={{scale: 0.85}} whileHover={{ scale: [null, 1.25, 1.18] }} transition={{ duration: 0.3 }} initial={{
                y:-100,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0.2}
            }}
            exit={{ y:-100 }}>
                <Bold>➽</Bold>projects</NavButton></ScrollIntoView>)}
            </AnimatePresence>

            <AnimatePresence>
            {(props.isVisible &&
            <ScrollIntoView selector={"#" + props.blog}><NavButton whileTap={{scale: 0.85}} whileHover={{ scale: [null, 1.25, 1.18] }} transition={{ duration: 0.3 }} initial={{
                y:-100,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0.3}
            }}
            exit={{ y:-100 }}>
                <Bold>➽</Bold>blog</NavButton></ScrollIntoView>)}
            </AnimatePresence>
        </NavBox>
    )
}

export default NavigationComponent;