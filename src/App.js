import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import PaginationOutlined from "./components/Products/components/Pagination";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <Fragment>
      <Header setPage={setPage} setQuery={setQuery} />
      <PaginationOutlined
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
      <Products setTotalPages={setTotalPages} pageNumber={page} query={query} />
      <PaginationOutlined
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </Fragment>
  );
};

export default App;
