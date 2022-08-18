import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from 'styled-components';
import LogoComponent from "../subComponents/Logo";
import NavigationComponent from "../subComponents/Navigation";
import ScrollIntoView from 'react-scroll-into-view';
import { DarkCloud, GreenBird } from "../subComponents/AllSvgs";

// STYLED COMPONENTS 
const MainContainer = styled(motion.div)`
z-index: 2;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(75,153,186,1) 100%); 
width: 100vw;
min-height: 100vh;
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

let navnames = {
    about: "about",
    projects: "projects",
    blog: "blog"
}

const MainContent = (props) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20, restDelta: 0.0001});

    return (
        <MainContainer>
            <NavigationComponent isVisible={props.isVisible} about={navnames.about} projects={navnames.projects} blog={navnames.blog}/>
            <ScrollIntoView selector={"#"+navnames.about}><LogoComponent isVisible={props.isVisible} key="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 1}}/></ScrollIntoView>

            <DarkCloud width={'min(12vw, 15vh'} height={'min(14vw, 15vh'}/>

            <div style={{ height: '100vh' }}/>
            <div id={navnames.about}>I wanna be seen</div>
      
            <div style={{ height: '100vh' }}/> 
            <ProgressBar
            style={{ scaleX }}
            />
            <div>yoyoyo</div>
        </MainContainer>
    );
}

export default MainContent;