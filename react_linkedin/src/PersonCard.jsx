import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const PersonCard = ({ name, age, email, photoUrl }) => {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 345, minHeight: 300, maxHeight: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={photoUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {age} | Email: {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartilhar
        </Button>
        <Button size="small">Linkedin</Button>
      </CardActions>
    </Card>
  );
};

export default PersonCard;