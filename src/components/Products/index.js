import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./components";
import axios from "axios"; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    alignSelf : 'stretch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const API_URL = "https://api.searchspring.net/api/search/search.json";



const Products = ({ query, pageNumber, setTotalPages }) => {
  const [result, setResult] = useState(null);
  const classes = useStyles();
  const renderGrid = (product) => {
    return (
      <Grid className={classes.gridItem} key={product.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <ProductCard {...product} />
      </Grid>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}?siteId=scmq7n&q=${query}&resultsFormat=native&page=${pageNumber}`
      );
      setTotalPages(result.data.pagination.totalPages);
      setResult(result.data.results);
    };
    fetchData();
  }, [pageNumber, query, setTotalPages]);

  if (!result) return null;

  return (
    <div className={classes.root}>
      <Grid  container alignItems="center" spacing={2}>
        {result.map(renderGrid)}
      </Grid>
    </div>
  );
};

export default Products;
