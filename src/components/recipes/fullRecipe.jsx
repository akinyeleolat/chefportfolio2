import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Instance from './../../config/axios';
import Spinner from '../layout/Spinner';
import Recipe from './Recipe';

const FullRecipe = props => {
  const [recipe, setRecipe] = useState({ recipe: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const recipeId = parseInt(props.match.params.id);

  useEffect(() => {
    const fetchRecipe = async recipeId => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await Instance.get(`/recipe/${recipeId}`);
        setRecipe(result.data.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchRecipe(recipeId);
  }, [recipeId]);

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
          <h3 className="text-center mb-4">Recipe</h3>
          <div className="row">
            {
              <Recipe
                key={recipe.id}
                recipe={recipe}
                instructions={recipe.instructions}
              />
            }
          </div>
        </div>
      )}
    </Fragment>
  );
};
FullRecipe.propTypes = {
  match: PropTypes.object,
};
export default FullRecipe;
