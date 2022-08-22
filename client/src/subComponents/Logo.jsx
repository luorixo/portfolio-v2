import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Logo = styled(motion.button)`
background: none;
border: none;
padding: 0;
margin: 0;
cursor: pointer;
position: fixed;
z-index: 10 !important;
top: 6%;
left: 5%;
color: #ffffff;
font-family: 'Press Start 2P', cursive;
font-size: calc(0.2em + 1.5vmax);
text-shadow:  0.25vmax 0.2vmax 0.1vmax #132B35;
height: calc(0.8rem + 1vmax);

@media (max-width: 470px) {
    display: none;
}
`

const LogoComponent = (props) => {
    return (
        <AnimatePresence>
            {(props.isVisible &&
            <Logo
            whileHover={{ scale: [null, 1.15, 1.1] }}
            whileTap={{scale: 0.85}}
            transition={{ duration: 0.3}}
            initial={{
                y:-100,
                opacity: 0,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                opacity: 1,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0}
            }}
            exit={{ y:-100, opacity: 0, transition: { type:'spring', duration: 1.5} }}
            >
                echua.top
            </Logo>
            )}
        </AnimatePresence>
    )
}

export default LogoComponent;