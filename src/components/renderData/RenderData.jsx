const RenderData = (props) => {
  // Returning products in fridge according to filter and showing them in DOM via props-list
  // Showing fridge-container only if list of products exists
  return props.filteredList.length > 0 ? (
    <div className="fridge-container ">
      <h2>Fridge</h2>
      <ul>
        {props.filteredList.map((value, index) => {
          return (
            <li key={index}>
              <p style={{ fontWeight: "bold" }}>{value.name}</p>
              <p style={{ fontStyle: "italic" }}>{value.category}</p>
              <p>{value.amount}</p>
              <p>{value.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : 
  null;
};

export default RenderData;
