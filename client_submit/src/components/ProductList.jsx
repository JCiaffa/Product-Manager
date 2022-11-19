import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
  const navigate = useNavigate();
  const { removeFromDom } = props;

  const handleDelete = (deleteId) => {
    axios
      .delete(`http://localhost:8000/api/product/${deleteId}`)
      .then((response) => {
        removeFromDom(deleteId);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.product.map((eachProd, i) => (
            <tr key={i}>
              <td>{eachProd.title}</td>
              <td>{eachProd.price}</td>
              <td>{eachProd.description}</td>
              <td>
                <div>
                  <button onClick={() => handleDelete(eachProd._id)}>
                    Delete
                  </button>
                  <Link to={`/product/${eachProd._id}`}>Details</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
