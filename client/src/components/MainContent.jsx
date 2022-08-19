import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from 'styled-components';
import LogoComponent from "../subComponents/Logo";
import NavigationComponent from "../subComponents/Navigation";
import ScrollIntoView from 'react-scroll-into-view';
import { DarkCloud, GreenBird } from "../subComponents/AllSvgs";
import { AnimatePresence } from "framer-motion";

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

const AboutSection = styled(motion.div)`
bottom: 0;
left: 0;
right: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`;

const AboutContent = styled(motion.div)`
display: flex;
//background-color: beige;
flex-direction: column;
justify-content: center;
width: 70vw;
height: 50vh;
z-index: 8;
font-family: 'Source Sans Pro', sans-serif;
font-size: calc(0.2em + 2.3vmax);
color: white;


h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin:0;
    font-weight: 400;
}

h1 {
    line-height: 1.2;
    font-weight: 800;
    text-shadow:  0.3vmax 0.2vmax #132B35;
}

`;

const CloudBox1 = styled(motion.div)`
position: absolute;
top: 5%;
left: 82%;
height: 1vh;
width: 100vw;
transform-origin: 0%;
z-index: 3;
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

            <AnimatePresence>
            {(props.isVisible &&<AboutSection id={navnames.about} initial={{
                y:-100,
                opacity: 0,
                transition: { type:'spring', duration: 2}
            }}
            animate={{
                y:0,
                opacity: 1,
                transition: { type:'spring', bounce:0.6, duration: 2, delay: 0}
            }}
            exit={{ y:-100, opacity: 0, transition: { type:'spring', duration: 2} }}>
                <AboutContent>
                    <h5>Kia Ora,</h5>
                    <h1>I'm Eugene. I code, read, game, and nerd out over tech!</h1>
                    <h5 style={{ marginTop: '2vmax'}}>I study software engineering  @ the University of Auckland.</h5>
                    <h5 style={{ marginTop: '0.7vmax'}}>I’m a budding effective altruist who <motion.button style={{color:'red', background: 'none', border: 'none', fontSize: 'calc(0.8em + 0.5vw)'}} whileHover={{ color: '#007859', scale: [null, 1.5, 1.3], transition:{duration:0.3} }}>❤</motion.button> plants, books, and tech among a great many other things!</h5>
                </AboutContent>
            </AboutSection>)}
            </AnimatePresence>

            {/*<CloudBox1>
            <DarkCloud width={'50vh'} height={'50vh'}/>
            </CloudBox1>*/}

            <div style={{ height: '100vh' }}/>
      
            <div style={{ height: '100vh' }}/> 
            <ProgressBar
            style={{ scaleX }}
            />
            <div>yoyoyo</div>
        </MainContainer>
    );
}

export default MainContent;