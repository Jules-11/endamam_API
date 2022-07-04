import React from "react";

const Recipe = ({ item }) => {
  const nutrientsArr = ["CA", "CHOLE", "FAT", "FIBTG", "SUGAR", "NA", "FE"];
  return (
    <div className="card" style={{ maxWidth: "350px", marginTop: "40px" }}>
        <div style={{paddingTop: "20px"}}>
        <h2 className="card-title">{item.recipe.label}</h2>
        </div>
      <img
        src={item.recipe.image}
        alt={item.recipe.label}
        style={{ padding: "20px" }}
      />
      <div className="card-body">
        
        <div className="card-text fw-light">
        <div className="text-center">
        <h3>Nutrients</h3>
        </div>
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
        <br/>
        <div className="text-center">
        <h3>Ingredients</h3>
        </div>
          {item.recipe.ingredientLines.map((ing) => (
            <div className="custom-control custom-checkbox list-group-item">
            <label className="custom-control-label " for="customCheck1">{ing}</label>
            <div className="d-flex justify-content-end">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            </div>
          </div>
            
          ))}
          
        <div className="card-body d-flex justify-content-center">
          <button type="button" className="btn btn-dark">
            <a href={item.recipe.url} target="_blank" className="card-link text-white">
              Full Recipe!
            </a>
          </button>
          <button type="button" className="btn btn-dark">
            <a href="#" className="card-link text-white">
              Add To List
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
