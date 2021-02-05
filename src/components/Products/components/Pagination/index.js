import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    marginBottom : "16px"
  },
}));

const PaginationOutlined = ({ page , setPage, totalPages }) => {
  const classes = useStyles();

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  return (
    <div className={classes.root}>
      <Pagination
        showFirstButton
        showLastButton
        size="small"
        count={totalPages}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
        page={page}
      />
    </div>
  );
};
export default PaginationOutlined;
