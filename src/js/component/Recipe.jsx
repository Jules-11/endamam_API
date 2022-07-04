import React from "react";

const Recipe = ({ item }) => {
  const nutrientsArr = ["CA", "CHOLE", "FAT", "FIBTG", "SUGAR", "NA", "FE"];
  return (
    <div className="card" style={{ maxWidth: "500px", marginTop: "40px" }}>
      <img
        src={item.recipe.image}
        alt={item.recipe.label}
        style={{ padding: "20px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.recipe.label}</h5>
        <div className="card-text fw-light">
          <strong>Nutrients:</strong>
          <ul>
            {nutrientsArr.map((nut) => {
              return (
                <li className="nutrients-list">
                  {item.recipe.totalNutrients[nut].label +
                    ": " +
                    item.recipe.totalNutrients[nut].quantity.toFixed(0) +
                    " " +
                    item.recipe.totalNutrients[nut].unit}
                </li>
              );
            })}
          </ul>
        </div>
        <strong>Ingredients:</strong>
        <ul className="list-group list-group-flush">
          {item.recipe.ingredientLines.map((ing) => (
            <li className="list-group-item">{ing}</li>
          ))}
        </ul>
        <hr />
        <div className="card-body">
          <button type="button" className="btn btn-dark">
            <a href={item.recipe.url} target="_blank" className="card-link text-white">
              Full Recipe!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
