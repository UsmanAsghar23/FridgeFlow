import React, { Fragment } from "react";

export default class FilterData extends React.Component {
  // Getting filter category value and setting it via props-function
  setUpFilter = (event) => {
    const category = event.target.value;
    this.props.setFilterCategory(
      (filterCategory) => (filterCategory = category)
    );
  };

  // Returning category-buttons to filter products in fridge and showing them in DOM
  render() {
    return (
      <Fragment>
        <div className="button-container">
          <button
            value=""
            className="category-btn"
            onClick={(event) => this.setUpFilter(event)}
          >
            all
          </button>
          {this.props.categories.map((value, index) => {
            return (
              <button
                key={index}
                value={value}
                className="category-btn"
                onClick={(event) => this.setUpFilter(event)}
              >
                {value}
              </button>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
