import React from "react";
import { useState, useEffect } from "react";
import Recipe from "./Recipe.jsx";


//create your first component
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  
  

  useEffect(() => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=e5010e00&app_key=0326e037783040d1e8513857ee63d982&q=chicken"
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
      <div>
        <ul>
          {items.map((item) => (
            
            <Recipe item={item}/>
            
          ))}
        </ul>
      </div>
    );
  }
};

export default Home;
