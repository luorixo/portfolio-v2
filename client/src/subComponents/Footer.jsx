import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const FooterSection = styled(motion.div)`
z-index: 10 !important;
display: flex;
align-items: center;
justify-content: center;
height: 10vmax;
`

const Text = styled(motion.button)`
background: none;
border: none;
padding: 0;
cursor: pointer;
z-index: 10 !important;
top: 6%;
left: 5%;
color: #132B35;
font-family: 'Source Sans Pro', sans-serif;
font-size: calc(0.8vmax + 0.6vw);
height: calc(0.8rem + 1vmax);
`

const FooterComponent = (props) => {
    return (
        <FooterSection>
        <AnimatePresence>
            {(props.isVisible &&
            <Text
            whileHover={{ scale: [null, 1.03, 1.015] }}
            transition={{ duration: 0.3}}
            initial={{
                y:100,
                opacity: 0,
                transition: { type:'spring', duration: 1.5}
            }}
            animate={{
                y:0,
                opacity: 1,
                transition: { type:'spring', bounce:0.6, duration: 1.75, delay: 0}
            }}
            exit={{ y:100, opacity: 0, transition: { type:'spring', duration: 1.5} }}
            >
                Coded by me! &nbsp; | &nbsp; Made w/ React + Framer Motion &nbsp; | &nbsp; <b>Eugene Chua</b> - 2022
            </Text>
            )}
        </AnimatePresence>
        </FooterSection>
    )
}

export default FooterComponent;