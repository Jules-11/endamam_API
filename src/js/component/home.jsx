import React from "react";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const nutrientsArr = ["CA", "CHOLE", "FAT", "FIBTG", "SUGAR", "NA", "FE"]
  

  useEffect(() => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=e5010e00&app_key=0326e037783040d1e8513857ee63d982&q=eggplant"
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.hits);
          console.table(result.hits[0].recipe);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("nooooooooo", error);
        }
      );
  }, []);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded || items.length === 0) {
    return <>loading....</>;
  } else if (items.length != 0) {
    console.table(items);
    return (
      <div className="wrapper">
        <ul className="card-grip">
          {items.map((item) => (
            
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
            
          ))}
        </ul>
      </div>
    );
  }
};

export default Home;
