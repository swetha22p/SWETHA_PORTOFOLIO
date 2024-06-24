import React, { useState } from 'react';
import { Box, Typography, IconButton, Snackbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import Heart icon for like

import './Contact.scss';

const Contact = () => {
  const [likes, setLikes] = useState(15); // Example initial count
  const [liked, setLiked] = useState(false);
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  const incrementLikes = () => {
    setLikes(likes + 1);
    setLiked(true);
    setShowThanksMessage(true);
    // Here you can add logic to store the like count in local storage or send it to a backend API
  };

  const handleCloseThanksMessage = () => {
    setShowThanksMessage(false);
  };

  return (
    <div className='contact'> 
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom className='hd'>
          Contact Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, paddingBottom: '20px' }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/swetha-poppoppu-6aa647219/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#0e76a8' }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/swetha22p"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:swethapoppoppu@gmail.com"
            sx={{ color: '#D44638' }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
          {/* Like button */}
          <IconButton
            onClick={incrementLikes}
            sx={{ color: liked ? 'red' : 'white' }} // Change color based on liked state
          >
            <FavoriteIcon fontSize="large" />
          </IconButton>
          <Typography variant="body1">{likes} Likes</Typography> {/* Display like count */}
        </Box>
        {/* Snackbar for displaying thanks message */}
        <Snackbar
          open={showThanksMessage}
          autoHideDuration={3000} // Adjust duration as needed
          onClose={handleCloseThanksMessage}
          message="Thanks for liking!"
        />
        <Typography variant="body2" style={{ color: 'white', fontSize: '20px', paddingBottom: '20px' }}>
          © Copyright 2024, designed & developed by{' '}
          <span style={{ color: '#8e24aa' ,fontSize: '22px',fontFamily: 'cursive'}}>Swetha Poppoppu</span>
        </Typography>
      </Box>
    </div>
  );
};

export default Contact;
