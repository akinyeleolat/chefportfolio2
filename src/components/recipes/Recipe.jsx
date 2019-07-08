import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, CardHeader, Button } from 'reactstrap';

const  Recipe = (props) => {
    const { id, title, chefName,image, ingredients, mealType } = props.recipe
    return (
    <div className='col-md-4'>
    <Card className='card mb-4 shadow-sm'>
      <CardImg src={image} style={{height:'200px'}} alt='recipe'/>
      <CardHeader><h6>{chefName}</h6></CardHeader>
        <CardBody>
          <CardTitle><h5>{title}</h5></CardTitle>
          <CardSubtitle><u><h6>Ingredients</h6></u></CardSubtitle>
          <CardText>
          {ingredients && (ingredients).toString()}
          </CardText>

          <Link to={`recipe/${id}`}><Button className='btn btn-danger btn-block'>View Instructions <i className='fas fa-chevron-right'></i></Button></Link>
        </CardBody>
        <CardFooter>
        {mealType}
        </CardFooter>
      </Card>
    </div>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
  }
export default Recipe;
