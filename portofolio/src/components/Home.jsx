import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Image from '../img/home.avif'; // Correct import of the image
import './Home.scss'; // Import CSS file

const HomePage = () => {
  return (
    <div className='home'>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} className='content'>
            <span className="new">
              Hi! I'm Swetha...
            </span>
            <Typography
              variant="h4"
              component="div"
              // Apply className for styling
            >
              <span  className="homepage-title">
                I  Love exploring <br/>
                something new every day.
              </span>
            </Typography>
            <Typography variant="body1" component="div" className="homepage-description">
              A passionate web developer with a keen interest in building dynamic and responsive websites.<br />
              With a solid foundation in Flask, MongoDB, React, HTML, CSS, and basic knowledge of machine learning,<br />
              I strive to create user-friendly and efficient web applications.<br />
              Welcome to my portfolio!
            </Typography>
            <br/><br/>
            {/* <Button
              variant="contained"
              color="primary"
              href="/contact" // Replace with the appropriate link or action
              className="homepage-button" // Apply className for styling
            >
              View Projects
            </Button> */}
          </Grid>
          
          <Grid item xs={12} sm={4} className='Image'>
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

export default HomePage;
