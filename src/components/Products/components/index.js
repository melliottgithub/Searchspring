import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative",
    height: "100%"
  },
  sale: {
    backgroundColor: "blueviolet",
    borderRadius : "50%",
    width: "50px",
    height : "50px",
    color: "#fff",
    justifyContent: "center",
    display:"flex",
    alignItems: "center",
    position:"absolute",
    zIndex: 99,
    top: 5,
    right: 5,
  }
});

const ProductCard = ({
  msrp,
  title,
  price,
  name,
  thumbnailImageUrl,
  description,
  uid,
  on_sale,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
       <div className={classes.sale}>Sale</div>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="500"
          image={thumbnailImageUrl}
          title={title}
          />        
        <CardContent>
          <Typography align="center" gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography
            color="primary"
            align="center"
            variant="body2"
            component="p"
            >
            {<del style={{color : "grey"}}>${price}</del>} - <strong>${msrp}</strong>  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
