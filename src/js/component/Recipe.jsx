import React from 'react'

const Recipe = ({ item }) => {
    const nutrientsArr = ["CA", "CHOLE", "FAT", "FIBTG", "SUGAR", "NA", "FE"]
  return (
    <div className="card">
    <div className="card-content">
      <h2 className="card-name">{item.recipe.label}</h2>
      <div className="card-image">
        <img src={item.recipe.image} alt={item.name} />
      </div>
      <strong>Ingredients:</strong>
      <ul className="ing-list">
        {item.recipe.ingredientLines.map((ing) => (
          <li>{ing}</li>
        ))}
      </ul>
    </div>
    <div>
        <strong>Nutrients:</strong>
      <ul>
          
            {nutrientsArr.map((nut) => { return(
                <li className="nutrients-list">
                {item.recipe.totalNutrients[nut].label + ": " + item.recipe.totalNutrients[nut].quantity.toFixed(0) + " " + item.recipe.totalNutrients[nut].unit}
              </li>
              )
            } )}
      </ul>
    </div>
    <button>
    <a href={item.recipe.url} target="_blank">Full Recipe</a>
    </button>
  </div>
  )
}

export default Recipe