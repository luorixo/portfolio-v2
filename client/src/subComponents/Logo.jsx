import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Logo = styled(motion.button)`
background: none;
border: none;
padding: 0;
cursor: pointer;
position: fixed;
z-index: 10 !important;
top: 6%;
left: 5%;
color: #ffffff;
font-family: 'Press Start 2P', cursive;
font-size: calc(1em + 0.5vw);
text-shadow:  3px 2px #132B35;
height: calc(1.25rem + 0.5vw);
`

const LogoComponent = (props) => {
    return (
        <AnimatePresence>
            {(props.isVisible &&
            <Logo
            whileHover={{ scale: [null, 1.15, 1.1] }}
            whileTap={{scale: 0.85}}
            transition={{ duration: 0.3 }}
            initial={{
                y:-100,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0}
            }}
            exit={{ y:-100 }}
            >
                echua.top
            </Logo>
            )}
        </AnimatePresence>
    )
}

export default LogoComponent;