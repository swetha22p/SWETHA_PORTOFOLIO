import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faPython, faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faFlask, faBrain, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Import additional icons from solid set
import Image from '../img/logo1.JPG'; // Correct import of the image
import './About.scss'; // Import CSS file

const About = () => {
  return (
    <div className="about">
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} className='about-content'>
            <span className="about-title">
              About Me
            </span>
            <Typography variant="body1" component="div" className="Aboutpage-description">
            I am a 2024 graduate with a passion for designing websites and creating impactful digital experiences.<br />
             During my studies at the Raj Reddy Center, IIITH, I gained valuable experience as an eight-month developer, contributing to the development of a full-stack application.<br />

My technical skills include Python, React.js, Flask, MongoDB, HTML, and CSS. 
I also coordinated hackathons for juniors focused on machine learning and Flask as the coordinator of the Coding Club at my college, fostering a collaborative environment for learning and exploring new technologies.<br />

I am enthusiastic about leveraging my skills to innovate and solve real-world challenges through intuitive and user-friendly design.
            </Typography>
            <br /><br />
            <Box className="skills">
              <Typography variant="h6" component="div" className="skills-title">Skills:</Typography>
              <Box className="skill">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                </a>
                <span>HTML</span>
              </Box>
              <Box className="skill">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                </a>
                <span>CSS</span>
              </Box>
              <Box className="skill">
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPython} className="skill-icon" />
                </a>
                <span>Python</span>
              </Box>
              <Box className="skill">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faReact} className="skill-icon" />
                </a>
                <span>React</span>
              </Box>
              <Box className="skill">
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLeaf} className="skill-icon" />
                </a>
                <span>MongoDB</span>
              </Box>
              <Box className="skill">
                <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFlask} className="skill-icon" />
                </a>
                <span>Flask</span>
              </Box>
              <Box className="skill">
                <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faBrain} className="skill-icon" />
                </a>
                <span>ML Basics</span>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} className='mine'>
            <Box
              component="img"
              src={Image} // Use the imported image
              alt="Profile"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
