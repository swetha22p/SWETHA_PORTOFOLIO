// src/components/CustomCard.jsx

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import tile from "../icons/placeHolder.jpg";
import CompanyDetails from '../Sub-Pages/companyDetails'

const CustomCard = ({ product, ...rest }) => {
  const navigate = useNavigate();

  const handleChange = () => {

    localStorage.setItem("companyId", product._id);
    navigate("/teams");
  };
  const truncate = (desc) => {
    const num = 100;
    if (!desc || !desc.length) {
      return ""; // Return an empty string if desc is undefined, null, or has no length property
    }
    if (desc.length <= num) {
      return desc;
    }
    return desc.slice(0, num) + "...";
  };
  

  const truncateName = (name) => {
    const num = 16;
    if (!name || !name.length) {
      return ""; // Return an empty string if name is undefined, null, or has no length property
    }
    if (name.length <= num) {
      return name;
    }
    return name.slice(0, num) + "...";
  };
  
  

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f2fffe",
        height: "100%",
      }}
      {...rest}
    >
     <CardMedia
  component="img"
  image={product.imgUrl}
  sx={{
    borderBottomLeftRadius: "8%",
    borderBottomRightRadius: "8%",
    width: '100%', // Ensures the image takes up the full width of the container
    height: '100%', // Allows the height to adjust based on the aspect ratio
    maxHeight: '300px', // Optional: limits the height to 300px if desired
    objectFit: 'cover', // Ensures the image covers the container, cropping if necessary
    objectPosition: 'center', // Centers the image within the container
  }}
/>
      <CardHeader title={truncateName(product.orgName)} sx={{ fontSize: "24px", fontWeight: "bold" }} />
      <Box sx={{ flexGrow: 0 }}>
        <CardContent style={{ width: "100%", height: "100%" }}>
          <Typography
            style={{ fontSize: "22px", height: 100 }}
            color="text.secondary"
            sx={{ width: "100%" }}
          >
            {truncate(product.description)}
          </Typography>
        </CardContent>
      </Box>
      <Divider />
      <CardActions disableSpacing>
        <CompanyDetails company={product} />
        <Button onClick={handleChange}>Go to Team</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
