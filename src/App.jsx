import { Fragment, useState, useEffect } from "react";
import ProductForm from "./components/productForm/ProductForm";
import FilterData from "./components/filterData/FilterData";
import RenderData from "./components/renderData/RenderData";
import { initializeApp } from "firebase/app";
import './App.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzMpARNjuQz5swI1xFdHyQjkBKjTU4AlI",
  authDomain: "fridgeflow-1d5bb.firebaseapp.com",
  projectId: "fridgeflow-1d5bb",
  storageBucket: "fridgeflow-1d5bb.firebasestorage.app",
  messagingSenderId: "9635535682",
  appId: "1:9635535682:web:eae4d49ff2926fc059c6db",
  measurementId: "G-1FJ22R6CXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);

const App = () => {
  // State for products, categories, and filtering
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredList, setFilteredList] = useState(list);

  // Function to add a new product to the list
  const addNewProduct = (product) => {
    setList((list) => [...list, product]);
    if (!categories.includes(product.category.toLowerCase())) {
      setCategories((categories) => [
        ...categories,
        product.category.toLowerCase(),
      ]);
    }
  };

  // Filtering products based on selected category
  const useFilter = () => {
    if (filterCategory === "") {
      setFilteredList(list);
    } else {
      const filteredProducts = list.filter(
        (product) => product.category === filterCategory
      );
      setFilteredList(filteredProducts);
    }
  };

  // Run filtering logic whenever the category or list changes
  useEffect(useFilter, [filterCategory, list]);

  // Return UI components with props and additional static content
  return (
    <Fragment>
      <main>
        <div className="app-container">
          <div className="title-container">
            <h1>Fridge App</h1>
          </div>
          <h2>By Group 2</h2>
          <div className="main-container">
            <ProductForm addNewProduct={addNewProduct} />
            {categories.length > 0 && (
              <FilterData
                categories={categories}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
              />
            )}
            <RenderData filteredList={filteredList} />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
