import React, { useState, Fragment, useContext, useEffect } from 'react';
import Instance from './../../config/axios';
import { RecipeContext } from '../../context';
import Spinner from '../layout/Spinner';
import Recipe from './Recipe';

const Recipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { recipes, setRecipes } = useContext(RecipeContext);

  useEffect(() => {
    const fetchAllRecipe = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await Instance.get(`/recipe`);
        setRecipes(result.data.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchAllRecipe();
  }, [recipes.length]);

  if (isError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <Fragment>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <h3 className="text-center mb-4">{recipes.heading}</h3>
          <div className="row">
            {recipes.length
              ? recipes.map(item => <Recipe key={item.id} recipe={item} />)
              : null}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Recipes;
