import React, { Component, PropTypes } from 'react';
import { postRecipe } from '../actions/index';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';

class RecipeNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    submitForm(recipe){
        this.props.postRecipe({
            id: this.props.recipes.length, 
            name: recipe.name, 
            ingredients: recipe.ingredients.split(',')
        });
        this.context.router.push('/');
    }

    render() {
        return (
            <RecipeForm onSubmit={this.submitForm.bind(this)}/>
        )
    }
}

function mapStateToProps(state) { 
    return {recipes: state.recipes.all};
};

export default connect(mapStateToProps, { postRecipe })(RecipeNew);