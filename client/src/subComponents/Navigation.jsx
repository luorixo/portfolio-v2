import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ScrollIntoView from 'react-scroll-into-view';

const NavBox = styled(motion.div)`
display: flex;
align-items: flex-end;
gap: calc(0.0rem + 4vw);
position: fixed;
top: 6%;
right: 5%;
z-index: 10;
height: calc(0.8rem + 1vmax);

button:hover {
    color: #C2DC71;
    //text-decoration: underline wavy 0.1vmax;
}

@media (max-width: 470px) {
    top: 4%;
    left: 50%;
    transform: translate(-50%, 0);
    justify-content: center;
    gap: calc(0.0rem + 8vw);
}
`;

const NavButton = styled(motion.button)`
background: none;
border: none;
padding: 0;
margin: 0;
cursor: pointer;
color: #ffffff;
font-family: 'Press Start 2P', cursive;
font-size: calc(0.2em + 1vmax);
text-shadow:  0.25vmax 0.2vmax 0.1vmax #132B35;
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
                opacity: 0,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                opacity: 1,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0.2}
            }}
            exit={{ y:-100, opacity: 0, transition: { type:'spring', duration: 1.5} }}>
                <Bold>➽</Bold>me</NavButton></ScrollIntoView>)}
            </AnimatePresence>
            
            <AnimatePresence>
            {(props.isVisible &&
            <ScrollIntoView selector={"#" + props.projects}><NavButton whileTap={{scale: 0.85}} whileHover={{ scale: [null, 1.25, 1.18] }} transition={{ duration: 0.3 }} initial={{
                y:-100,
                opacity: 0,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                opacity: 1,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0.4}
            }}
            exit={{ y:-100, opacity: 0, transition: { type:'spring', duration: 1.5} }}>
                <Bold>➽</Bold>projects</NavButton></ScrollIntoView>)}
            </AnimatePresence>

            <AnimatePresence>
            {(props.isVisible &&
            <ScrollIntoView selector={"#" + props.blog}><NavButton whileTap={{scale: 0.85}} whileHover={{ scale: [null, 1.25, 1.18] }} transition={{ duration: 0.3 }} initial={{
                y:-100,
                opacity: 0,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                opacity: 1,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0.6}
            }}
            exit={{ y:-100, opacity: 0, transition: { type:'spring', duration: 1.5} }}>
                <Bold>➽</Bold>blog</NavButton></ScrollIntoView>)}
            </AnimatePresence>
        </NavBox>
    )
}

export default NavigationComponent;