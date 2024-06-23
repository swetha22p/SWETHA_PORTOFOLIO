// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Divider,
//   Button,
//   Typography,
// } from "@mui/material";

// import tile from "../icons/placeHolder.jpg";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardActions from "@mui/material/CardActions";
// import NgoDetails from "../Sub-Pages/ngoDetails";
// import { useNavigate } from "react-router-dom";

// export function NgoCard({ product, ...rest }) {
//   let navigate = useNavigate();
//   const truncate = (desc) => {
//     const num = 100;
//     if (!desc || !desc.length) {
//       return ""; // Return an empty string if desc is undefined, null, or has no length property
//     }
//     if (desc.length <= num) {
//       return desc;
//     }
//     return desc.slice(0, num) + "...";
//   };
  

//   const truncateName = (name) => {
//     const num = 16;
//     if (!name || !name.length) {
//       return ""; // Return an empty string if name is undefined, null, or has no length property
//     }
//     if (name.length <= num) {
//       return name;
//     }
//     return name.slice(0, num) + "...";
//   };

//   const handleChange = (id) => {
    
//       navigate(`/ngoprojects/${id}`);
//   };

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "#f2fffe", 
//         height: "105%",
//       }}
//       {...rest}
//     >
//       <CardMedia
//   component="img"
//   image={product.imgUrl}
//   sx={{
//     borderBottomLeftRadius: "8%",
//     borderBottomRightRadius: "8%",
//     width: '100%', // Ensures the image takes up the full width of the container
//     height: '100%', // Allows the height to adjust based on the aspect ratio
//     maxHeight: '300px', // Optional: limits the height to 300px if desired
//     objectFit: 'cover', // Ensures the image covers the container, cropping if necessary
//     objectPosition: 'center', // Centers the image within the container
//   }}
// />

//       <CardHeader
//         title={truncateName(product.orgName)}
//         sx={{ fontSize: "24px", fontWeight: "bold" }}
//       />
//       <Box sx={{ flexGrow: 0  }}>
//         <CardContent>
//           <Typography
//             style={{ fontSize: "17px", height: 100 }}
//             color="text.secondary"
//           >
//             {truncate(product.description)}
//             <NgoDetails id={product.id} ngo={product} />
//           </Typography>
//         </CardContent>
//       </Box>
//       <Divider />
//       <CardActions disableSpacing>
//         <Button
//           variant="outlined"
//           size="small"
//           onClick={handleChange(product.orgId)}
//           sx={{ marginRight: 1 }}
//         >
//           {/* {product.projects} Projects */}
//           Projects
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import NgoDetails from "../Sub-Pages/ngoDetails";
import { useNavigate } from "react-router-dom";

export function NgoCard({ product, ...rest }) {
  let navigate = useNavigate();

  const truncate = (desc) => {
    const num = 100;
    if (!desc || !desc.length) {
      return "";
    }
    if (desc.length <= num) {
      return desc;
    }
    return desc.slice(0, num) + "...";
  };

  const truncateName = (name) => {
    const num = 16;
    if (!name || !name.length) {
      return "";
    }
    if (name.length <= num) {
      return name;
    }
    return name.slice(0, num) + "...";
  };

  const handleChange = (id,Name) => {
    navigate(`/ngoprojects/${id}/${Name}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f2fffe",
        height: "105%",
      }}
      {...rest}
    >
      <CardMedia
        component="img"
        image={product.imgUrl}
        sx={{
          borderBottomLeftRadius: "8%",
          borderBottomRightRadius: "8%",
          width: '100%',
          height: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <CardHeader
        title={truncateName(product.orgName)}
        sx={{ fontSize: "24px", fontWeight: "bold" }}
      />
      <Box sx={{ flexGrow: 0 }}>
        <CardContent>
          <Typography
            style={{ fontSize: "17px", height: 100 }}
            color="text.secondary"
          >
            {truncate(product.description)}
            <NgoDetails id={product.id} ngo={product} />
          </Typography>
        </CardContent>
      </Box>
      <Divider />
      <CardActions disableSpacing>
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleChange(product.orgId,product.orgName)} // Fixed line
          sx={{ marginRight: 1 }}
        >
          Projects
        </Button>
      </CardActions>
    </Card>
  );
}

