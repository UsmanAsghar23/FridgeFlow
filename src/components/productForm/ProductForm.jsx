import { Fragment, useState, useEffect } from "react";

const ProductForm = (props) => {
  // Setting state for product
  const [product, setProduct] = useState({
    name: "",
    category: "",
    amount: 0,
    date: null,
  });

  // Setting product when input values changes
  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name.toLowerCase()]: event.target.value.toLowerCase(),
    });
  };

  // Submitting new product to fridge and adding it to product list via props-function
  const submitProduct = (e) => {
    e.preventDefault();
    props.addNewProduct(product);
  };

  // Reseting inputs via reset-button
  const resetForm = (e) => {
    e.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  useEffect(() => {}, [product]);

  // Returning input form and showing it in DOM
  return (
    <Fragment>
      <div className="form-container">
        <form className="form" onSubmit={submitProduct}>
          <div>
            <h2>Set new product</h2>
          </div>
          <input
            type="text"
            name="name"
            maxlength="10"
            placeholder="name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            maxlength="10"
            placeholder="category"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="amount"
            required
            min="1"
            max="1000"
            onChange={handleChange}
          />
          <input type="date" name="date" required onChange={handleChange} />
          <div className="form-button-container">
            <button
              type="button"
              className="form-button"
              id="reset-button"
              onClick={resetForm}
            >
              Reset
            </button>
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProductForm;
