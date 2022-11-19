import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Product Manager</h1>
      <p>Title: {product.title}</p>
      <p>Price: {product.cost}</p>
      <p>Description: {product.description}</p>
      <p>
        <Link to={`/product/`}>Home</Link>
      </p>
      <p>
        <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
      </p>
    </div>
  );
};

export default Detail;
