import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Chip, CardActions, Button } from '@mui/material';
import './Projects.scss';
import phcp from '../img/phcp.png';
import hackathon from '../img/hackathon.png'
import insurance from '../img/li.png'
import resume from '../img/resume.png'
import cb from '../img/cb.png'
import gcc from '../img/gcc.png'



const projects = [
  {
    title: 'Hackathon Website',
    description: 'A website built for hackathon events. <a href="https://kiet-ai.vercel.app/" target="_blank" rel="noopener noreferrer"style="color: #29B6F6;">Check Here</a>',
    image: hackathon, // Replace with actual image path
    
    technologies: ['React'],
  },
  {
    title: 'Resume Builder',
    description: 'A web application to build resumes easily.',
    image: resume, // Replace with actual image path
    technologies: ['MERN'],
  },
  {
    title: 'Chatbot',
    description: 'A chatbot application.',
    image: cb, // Replace with actual image path
    technologies: ['ML', 'Flask', 'HTML', 'CSS'],
  },
  {
    title: 'Primary Health Care Platform',
    description: 'A platform for primary health care services.',
    image: phcp, // Replace with actual image path
    technologies: ['React', 'Flask', 'IndexedDB', 'MongoDB', 'PWA'],
  },
  {
    title: 'Student Club Dashboard',
    description: `
     A student management system facilitating project exploration, discussions, profile management, and community collaboration.
    `,
    image: gcc, // Replace with actual image path
    technologies: ['React-js', 'Node-js', 'Express', 'MongoDB'],
  },
  {
    title: 'Life Insurance Prediction',
    description: 'A project for predicting a person is eligible for life insurance or not.',
    image: insurance, // Replace with actual image path
    technologies: ['HTML', 'CSS', 'ML'],
  },
];

const Projects = () => {
  return (
    <Box className="projects-container">
    
    <Typography className='pt' style={{ fontSize: '3em' , fontWeight: '700'}}>
  Projects
</Typography>

      <Grid container spacing={3} className='gd'>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}> {/* Display 2 cards per row */}
            <Card sx={{ maxWidth: 545, backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', padding: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <CardMedia
                sx={{ height: 240 }}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="project-title">
                  {project.title}
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </Typography>
                <Box sx={{ mt: 2 }}>
                  {project.technologies.map((tech, idx) => (
                    <Chip key={idx} label={tech} sx={{ margin: '2px', backgroundColor: '#444', color: 'white' }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
