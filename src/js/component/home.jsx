import React from "react";
import { useState, useEffect, useRef } from "react";
import Recipe from "./Recipe.jsx";

//create your first component
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState([
    "avocado",
    "pasta",
    "cheese",
  ]);
  const searchRef = useRef();

  const searchBarHandler = (e) => {
    // console.log("Coucou", searchRef.current.value)
    e.preventDefault();
    setSearchInput(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=e5010e00&app_key=0326e037783040d1e8513857ee63d982&q=" +
        searchInput
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.hits);
          // console.table(result.hits[0].recipe);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("nooooooooo", error);
        }
      );
  }, [searchInput]);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded || items.length === 0) {
    return <>loading....</>;
  } else if (items.length != 0) {
    console.table(items);
    return (
      <div>
        <div className="row mt-5">
          <div className="col-6 offset-3">
            <form onSubmit={searchBarHandler}>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's in your fridge"
                  ref={searchRef}
                />
                <div class="input-group-append">
                  <button class="btn btn-success" type="submit">
                    Button
                    </button>
                    </div>
                    </div>
            </form>
          </div>
        </div>
        <div className="row">
          {items.map((item) => (
            <Recipe item={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
